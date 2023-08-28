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
