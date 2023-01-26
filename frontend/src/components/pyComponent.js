import React, { useState, useEffect } from 'react';
import './pyComponent.css'

const MyComp = () => {
    useEffect(() => {
        var data={
          "code": {
            "main_code": "def recur_factorial(n):\n  if n == 1:\n    return n\n  else:\n    return n*recur_factorial(n-1)\nprint(recur_factorial(3))",
            "custom_modules": {
              "pg_setup": ""
            }
          },
          "trace": [
            {
              "line": 1,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {},
              "ordered_globals": [],
              "stack_to_render": [],
              "heap": {},
              "stdout": ""
            },
            {
              "line": 6,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 1,
              "event": "call",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f1"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 2,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f1"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 5,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f1"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 1,
              "event": "call",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f2"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 2,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f2"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 5,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f2"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 1,
              "event": "call",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f3"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 2,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f3"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 3,
              "event": "step_line",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f3"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 3,
              "event": "return",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1,
                    "__return__": 1
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f3"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 5,
              "event": "return",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3
                  },
                  "ordered_varnames": [
                    "n"
                  ],
                  "is_zombie": false,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2,
                    "__return__": 2
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f2"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1,
                    "__return__": 1
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f3_z"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 5,
              "event": "return",
              "func_name": "recur_factorial",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3,
                    "__return__": 6
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "recur_factorial_f1"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2,
                    "__return__": 2
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2_z"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1,
                    "__return__": 1
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f3_z"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": ""
            },
            {
              "line": 6,
              "event": "return",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "recur_factorial": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "recur_factorial"
              ],
              "stack_to_render": [
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 3,
                    "__return__": 6
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f1_z"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 2,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 2,
                    "__return__": 2
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f2_z"
                },
                {
                  "func_name": "recur_factorial",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 3,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "n": 1,
                    "__return__": 1
                  },
                  "ordered_varnames": [
                    "n",
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "recur_factorial_f3_z"
                }
              ],
              "heap": {
                "1": [
                  "FUNCTION",
                  "recur_factorial(n)",
                  null
                ]
              },
              "stdout": "6\n"
            }
          ]
        }
        var data1={
          "code": {
            "main_code": "import file1\n\nprint(\"File one__name__ is set to: {}\" .format(__name__))\n\ndef function_one():\n  print(\"Function one is executed\")\n\ndef function_two():\n  print(\"Function two is executed\")\n\nif __name__ == \"__main__\":\n  print(\"File one executed when ran directly\")\n  function_one()\n  file1.function_three()\nelse:\n  print(\"File one executed when imported\")",
            "custom_modules": {
              "pg_setup": ""
            }
          },
          "trace": [
            {
              "line": 1,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {},
              "ordered_globals": [],
              "stack_to_render": [],
              "heap": {},
              "stdout": ""
            },
            {
              "line": 3,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "file1"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\n"
            },
            {
              "line": 5,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ]
              },
              "ordered_globals": [
                "file1"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\n"
            },
            {
              "line": 8,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\n"
            },
            {
              "line": 11,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\n"
            },
            {
              "line": 12,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\n"
            },
            {
              "line": 13,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\n"
            },
            {
              "line": 5,
              "event": "call",
              "func_name": "function_one",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [
                {
                  "func_name": "function_one",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {},
                  "ordered_varnames": [],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "function_one_f1"
                }
              ],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\n"
            },
            {
              "line": 6,
              "event": "step_line",
              "func_name": "function_one",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [
                {
                  "func_name": "function_one",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {},
                  "ordered_varnames": [],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "function_one_f1"
                }
              ],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\n"
            },
            {
              "line": 6,
              "event": "return",
              "func_name": "function_one",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [
                {
                  "func_name": "function_one",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "__return__": null
                  },
                  "ordered_varnames": [
                    "__return__"
                  ],
                  "is_zombie": false,
                  "is_highlighted": true,
                  "unique_hash": "function_one_f1"
                }
              ],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\nFunction one is executed\n"
            },
            {
              "line": 14,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [
                {
                  "func_name": "function_one",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "__return__": null
                  },
                  "ordered_varnames": [
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "function_one_f1_z"
                }
              ],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\nFunction one is executed\n"
            },
            {
              "line": 14,
              "event": "return",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {
                "file1": [
                  "REF",
                  1
                ],
                "function_one": [
                  "REF",
                  2
                ],
                "function_two": [
                  "REF",
                  3
                ]
              },
              "ordered_globals": [
                "file1",
                "function_one",
                "function_two"
              ],
              "stack_to_render": [
                {
                  "func_name": "function_one",
                  "file_name": "<string>",
                  "is_parent": false,
                  "frame_id": 1,
                  "parent_frame_id_list": [],
                  "encoded_locals": {
                    "__return__": null
                  },
                  "ordered_varnames": [
                    "__return__"
                  ],
                  "is_zombie": true,
                  "is_highlighted": false,
                  "unique_hash": "function_one_f1_z"
                }
              ],
              "heap": {
                "1": [
                  "INSTANCE",
                  "module"
                ],
                "2": [
                  "FUNCTION",
                  "function_one()",
                  null
                ],
                "3": [
                  "FUNCTION",
                  "function_two()",
                  null
                ]
              },
              "stdout": "File two __name__ is set to: file1\nFile two executed when imported\nFile one__name__ is set to: __main__\nFile one executed when ran directly\nFunction one is executed\nFunction three is executed\n"
            }
          ]
        }
        var data2={
          "code": {
            "main_code": "print(\"Hello\")",
            "custom_modules": {
              "pg_setup": ""
            }
          },
          "trace": [
            {
              "line": 1,
              "event": "step_line",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {},
              "ordered_globals": [],
              "stack_to_render": [],
              "heap": {},
              "stdout": ""
            },
            {
              "line": 1,
              "event": "return",
              "func_name": "<module>",
              "file_name": "<string>",
              "globals": {},
              "ordered_globals": [],
              "stack_to_render": [],
              "heap": {},
              "stdout": "Hello\n"
            }
          ]
        }
        

     const myViz = new window.ExecutionVisualizer('myDiv', data,
                                             {debugMode: false,
                                             showAllFrameLabels: true,
                                             lang: 'py3',
                                             highlightLines: true, arrowLines:false});
     myViz.redrawConnectors();
   
     let resizeTimer;
   
     window.addEventListener('resize', function(event){
       clearTimeout(resizeTimer);
       resizeTimer = setTimeout(function() {
         // Run code here, resizing has "stopped"
         if (myViz) {
           myViz.redrawConnectors();
         }
       }, 250);
     });
     
     return () => { clearTimeout(resizeTimer) }
    }, [])
   
    return ( <div className='pop-up'>
    <div id="myDiv" />
    </div>
    ) 
}

export default MyComp;