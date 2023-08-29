window.BENCHMARK_DATA = {
  "lastUpdate": 1693269942467,
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
          "id": "0d94168d204ab91836afb5afdcdedb21ba399c85",
          "message": "fix: run correct tests",
          "timestamp": "2023-08-28T20:40:01-04:00",
          "tree_id": "3a198c5cbadc0c95689bd45070def46ab20ccf2f",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/0d94168d204ab91836afb5afdcdedb21ba399c85"
        },
        "date": 1693269941455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_trust_shallow",
            "value": 1626569.828159537,
            "unit": "iter/sec",
            "range": "stddev: 3.8499920444112326e-8",
            "extra": "mean: 614.7906980000357 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_trust_nesting",
            "value": 210234.26958416335,
            "unit": "iter/sec",
            "range": "stddev: 1.638542242387391e-7",
            "extra": "mean: 4.756598446000112 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_trust_long_nested",
            "value": 27785.57290293887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012448252504935956",
            "extra": "mean: 35.98990035199995 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_shallow",
            "value": 2070894.2567473324,
            "unit": "iter/sec",
            "range": "stddev: 2.5239614364904936e-8",
            "extra": "mean: 482.88317799995184 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_nesting",
            "value": 145713.48645874462,
            "unit": "iter/sec",
            "range": "stddev: 1.684274994297796e-7",
            "extra": "mean: 6.862782740999933 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_long_nested",
            "value": 22980.19086428693,
            "unit": "iter/sec",
            "range": "stddev: 7.642174864036743e-7",
            "extra": "mean: 43.51573953000019 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 576596.1885764158,
            "unit": "iter/sec",
            "range": "stddev: 5.0775619659056827e-8",
            "extra": "mean: 1.7343160080002349 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 56405.800936867585,
            "unit": "iter/sec",
            "range": "stddev: 3.769332738360985e-7",
            "extra": "mean: 17.728672997999865 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 7315.545543810557,
            "unit": "iter/sec",
            "range": "stddev: 0.000002521720998570568",
            "extra": "mean: 136.69520530100004 usec\nrounds: 20"
          }
        ]
      }
    ]
  }
}
