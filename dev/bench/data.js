window.BENCHMARK_DATA = {
  "lastUpdate": 1693210273390,
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
          "id": "54e148e710ab848b3ead47acf1273c21a331d1ab",
          "message": "test: add ruff",
          "timestamp": "2023-08-28T03:50:39-04:00",
          "tree_id": "61ac0d21e6b2b20b385b6070143949544ec9c129",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/54e148e710ab848b3ead47acf1273c21a331d1ab"
        },
        "date": 1693209322203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_shallow",
            "value": 1696053.654073913,
            "unit": "iter/sec",
            "range": "stddev: 2.566206454407706e-9",
            "extra": "mean: 589.6039889999968 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_nesting",
            "value": 202757.48250003875,
            "unit": "iter/sec",
            "range": "stddev: 4.311604494208104e-9",
            "extra": "mean: 4.932000475000024 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_long_nested",
            "value": 28465.278951000164,
            "unit": "iter/sec",
            "range": "stddev: 6.990841655761264e-8",
            "extra": "mean: 35.13051819099998 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 552823.1115410186,
            "unit": "iter/sec",
            "range": "stddev: 1.2807805030891176e-8",
            "extra": "mean: 1.808896877000052 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 53192.58796972513,
            "unit": "iter/sec",
            "range": "stddev: 1.266559846020838e-7",
            "extra": "mean: 18.7996117159999 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 7320.104184953999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030449544261922444",
            "extra": "mean: 136.61007749800004 usec\nrounds: 20"
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
          "id": "ce5ca9ec6c9648053e9fdc23b27238300f3adbf6",
          "message": "fix: ensure platform build",
          "timestamp": "2023-08-28T03:55:21-04:00",
          "tree_id": "4919b163efd565fcaeee018f50d4b3acbd7690cd",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/ce5ca9ec6c9648053e9fdc23b27238300f3adbf6"
        },
        "date": 1693209560133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_shallow",
            "value": 2031364.6810100728,
            "unit": "iter/sec",
            "range": "stddev: 1.906620184548377e-9",
            "extra": "mean: 492.27989900009555 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_nesting",
            "value": 241528.17809466852,
            "unit": "iter/sec",
            "range": "stddev: 4.1270129295548484e-9",
            "extra": "mean: 4.140303660999933 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_long_nested",
            "value": 34078.338513108596,
            "unit": "iter/sec",
            "range": "stddev: 1.3752236316156138e-8",
            "extra": "mean: 29.344153606999924 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 659836.9177558491,
            "unit": "iter/sec",
            "range": "stddev: 4.343289140318604e-9",
            "extra": "mean: 1.5155259930000113 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 63909.338821387544,
            "unit": "iter/sec",
            "range": "stddev: 1.7410432290083523e-8",
            "extra": "mean: 15.64716547599997 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 8575.349004208487,
            "unit": "iter/sec",
            "range": "stddev: 6.312755267859078e-8",
            "extra": "mean: 116.61332961599979 usec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "joshua-auchincloss",
            "username": "joshua-auchincloss"
          },
          "committer": {
            "name": "joshua-auchincloss",
            "username": "joshua-auchincloss"
          },
          "id": "ca19646c3b2f11e3567fca2d2498d882ad40a71e",
          "message": "test: fix build",
          "timestamp": "2023-08-28T05:35:41Z",
          "url": "https://github.com/joshua-auchincloss/fastomit/pull/1/commits/ca19646c3b2f11e3567fca2d2498d882ad40a71e"
        },
        "date": 1693210272978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_shallow",
            "value": 2468775.7391469995,
            "unit": "iter/sec",
            "range": "stddev: 5.017813770919504e-10",
            "extra": "mean: 405.0590680000426 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_nesting",
            "value": 310058.6268587393,
            "unit": "iter/sec",
            "range": "stddev: 5.122088718395271e-9",
            "extra": "mean: 3.225196506000117 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_long_nested",
            "value": 43716.40790423768,
            "unit": "iter/sec",
            "range": "stddev: 1.8072077512207748e-8",
            "extra": "mean: 22.874706498999984 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 681346.8779233554,
            "unit": "iter/sec",
            "range": "stddev: 4.538457425640328e-9",
            "extra": "mean: 1.4676811949998978 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 67679.04220728831,
            "unit": "iter/sec",
            "range": "stddev: 7.027786286939459e-9",
            "extra": "mean: 14.775622813000012 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 9060.275771711078,
            "unit": "iter/sec",
            "range": "stddev: 2.4263822780617254e-7",
            "extra": "mean: 110.37191639600005 usec\nrounds: 20"
          }
        ]
      }
    ]
  }
}