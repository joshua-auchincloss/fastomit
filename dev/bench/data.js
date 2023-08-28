window.BENCHMARK_DATA = {
  "lastUpdate": 1693208560388,
  "repoUrl": "https://github.com/joshua-auchincloss/fastomit",
  "entries": {
    "Devel Benchmark": [
      {
        "commit": {
          "author": {
            "email": "auch.josh@gmail.com",
            "name": "benefactarch",
            "username": "joshua-auchincloss"
          },
          "committer": {
            "email": "auch.josh@gmail.com",
            "name": "benefactarch",
            "username": "joshua-auchincloss"
          },
          "distinct": true,
          "id": "74f28c68c98de158060bdadceaa80d346bd4f883",
          "message": "test: debug",
          "timestamp": "2023-08-28T03:20:52-04:00",
          "tree_id": "521802f54bc11e5e3a566f591b291a1dd0082fa5",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/74f28c68c98de158060bdadceaa80d346bd4f883"
        },
        "date": 1693207355867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_b_shallow_cext",
            "value": 1615805.4208321313,
            "unit": "iter/sec",
            "range": "stddev: 1.1918944692973516e-8",
            "extra": "mean: 618.8864000004438 nsec\nrounds: 15"
          },
          {
            "name": "tests/test_bench.py::test_b_shallow_native",
            "value": 553483.3957202134,
            "unit": "iter/sec",
            "range": "stddev: 9.437597436067625e-9",
            "extra": "mean: 1.8067389333310757 usec\nrounds: 15"
          },
          {
            "name": "tests/test_bench.py::test_b_nesting_cext",
            "value": 202534.75212801184,
            "unit": "iter/sec",
            "range": "stddev: 1.0849498330689567e-8",
            "extra": "mean: 4.937424266665857 usec\nrounds: 15"
          },
          {
            "name": "tests/test_bench.py::test_b_nesting_native",
            "value": 52748.410198081,
            "unit": "iter/sec",
            "range": "stddev: 1.8083538146495867e-7",
            "extra": "mean: 18.95791733333378 usec\nrounds: 15"
          },
          {
            "name": "tests/test_bench.py::test_b_long_nested_cext",
            "value": 27597.163439905784,
            "unit": "iter/sec",
            "range": "stddev: 1.0406121387750044e-7",
            "extra": "mean: 36.235608133334075 usec\nrounds: 15"
          },
          {
            "name": "tests/test_bench.py::test_b_long_nested_native",
            "value": 7044.231782833332,
            "unit": "iter/sec",
            "range": "stddev: 1.602559999825317e-7",
            "extra": "mean: 141.9601215333349 usec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "auch.josh@gmail.com",
            "name": "benefactarch",
            "username": "joshua-auchincloss"
          },
          "committer": {
            "email": "auch.josh@gmail.com",
            "name": "benefactarch",
            "username": "joshua-auchincloss"
          },
          "distinct": true,
          "id": "822d8e860188b710ad419b8814741697720f7def",
          "message": "fix: tests",
          "timestamp": "2023-08-28T03:38:56-04:00",
          "tree_id": "090640937f2fb00be19ef00d5fcf4e0a61ee64ef",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/822d8e860188b710ad419b8814741697720f7def"
        },
        "date": 1693208559966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_shallow",
            "value": 2366976.758295376,
            "unit": "iter/sec",
            "range": "stddev: 1.0292882702100725e-9",
            "extra": "mean: 422.4798560000096 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_nesting",
            "value": 308024.19551740633,
            "unit": "iter/sec",
            "range": "stddev: 2.5903162036182793e-9",
            "extra": "mean: 3.246498212000006 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_long_nested",
            "value": 42466.334823685116,
            "unit": "iter/sec",
            "range": "stddev: 1.1514752723046837e-7",
            "extra": "mean: 23.548064699999998 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 681564.8263586003,
            "unit": "iter/sec",
            "range": "stddev: 2.425492866258999e-9",
            "extra": "mean: 1.467211864999996 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 68075.25054669638,
            "unit": "iter/sec",
            "range": "stddev: 3.114513423288375e-8",
            "extra": "mean: 14.689626435000008 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 8954.706420216282,
            "unit": "iter/sec",
            "range": "stddev: 1.1065732167421321e-7",
            "extra": "mean: 111.673119483 usec\nrounds: 20"
          }
        ]
      }
    ]
  }
}