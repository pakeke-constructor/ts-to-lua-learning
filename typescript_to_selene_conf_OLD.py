

import sys, os, json


def yamlify (json_in):
    signatures = parse_namespace (json_in["children"])
    yaml_str = "globals:\n"
    for name, args in signatures:
        sig_str = f"  {name}:\n"
        if args is None:
            sig_str += "    any: true\n"
            yaml_str += sig_str
            continue
        if len(args) == 0:
            sig_str += "    args: []\n"
        else:
            sig_str += "    args:\n"
            for arg in args:
                sig_str += f"       - type: {arg}\n"
        yaml_str += sig_str
    return yaml_str


INTRINSIC_VALUE_TABLE = {"number": "number", "string": "string", "any": "any", "object": "table"}

def parse_function (f_json, pre_script=[]):
    name = ".".join(pre_script + [f_json['name']])
    params = []
    if "parameters" not in f_json["signatures"][0]:
        return (name, [])

    for p in f_json["signatures"][0]["parameters"]:
        _param_type = "any"
        match p["type"]["type"]:
            case "intrinsic":
                if p["type"]["name"] in INTRINSIC_VALUE_TABLE:
                    _param_type = INTRINSIC_VALUE_TABLE[p["type"]["name"]]
            case "array":
                _param_type =  "..."
            case "reflection":
                _param_type = "function"
            case "reference":
                _param_type = "table"
            case _:
                print(f"WARNING: Unhandled parameter type: {p['type']['type']} while parsing function: {name}. Using default 'any'.")
        params.append(_param_type)
    return (name, params)



def parse_namespace (ns_json, pre_script=[]):
    signatures = []
    for child in ns_json:
        match child["kindString"]:
            case "Function":
                signatures.append(parse_function(child, pre_script))
            case "Namespace":
                signatures += parse_namespace(child["children"], pre_script + [child["name"]])
            case "Variable":
                signatures.append((child["name"], None))
    return signatures



if __name__ == "__main__":
    py_version = float(".".join(sys.version.split(" ")[0].split(".")[:2]))
    if py_version < 3.10:
        print(f"Expected python version 3.10 or greater, doesn't support version {py_version}. Please upgrade.")
        exit(1)
    if len(sys.argv) != 3:
        print("Unexpected number of system arguments.\nExpected use:\n'python3 main.py \"{path to input}\" \"{path to output}\"'")
        exit(1)
    fname = sys.argv[1]
    oname = sys.argv[2]
    if not os.path.exists(fname):
        print(f"invalid input file: {fname}")
        exit(1)
    if os.path.exists(oname):
        override = input(f"WARNING: Output file already exists: {oname}. \nDo you want to override {oname}? \n (YES/NO)")
        if override.lower().strip() != "yes":
            exit(1)

    with open(sys.argv[1]) as json_input:
        dat = json_input.read()
        input = json.loads(dat)
        f = open(sys.argv[2], "w")
        f.write(yamlify(input))
        f.close()
        print(f"Created file {oname}.")