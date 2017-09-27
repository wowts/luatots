# luatots

This node module aims to transform a Lua program to a Typescript program (actually a Javascript program because it won't add any type information). It targets World of Warcraft addons, that use Lua 5.1.

## Usage

`luatots input/path output/path`

It will convert all the files of `input/path` to Typescript and output them in the `output/path` directory.
