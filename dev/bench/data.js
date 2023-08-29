window.BENCHMARK_DATA = {
  "lastUpdate": 1693271040667,
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
      },
      {
        "commit": {
          "author": {
            "email": "auch.josh@gmail.com",
            "name": "Joshua Auchincloss",
            "username": "joshua-auchincloss"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d46230508c7670dc2904b5ef98ee0adf125bd114",
          "message": "merge: pr #2 from joshua-auchincloss/v0.1.1\n\nv0.1.1",
          "timestamp": "2023-08-28T20:59:09-04:00",
          "tree_id": "9a2bda1d22ffdf3003a67769c61d5717b3b418bb",
          "url": "https://github.com/joshua-auchincloss/fastomit/commit/d46230508c7670dc2904b5ef98ee0adf125bd114"
        },
        "date": 1693271040315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_bench.py::test_cext_trust_shallow",
            "value": 1985390.7483665145,
            "unit": "iter/sec",
            "range": "stddev: 3.897504860565519e-10",
            "extra": "mean: 503.6791880000209 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_trust_nesting",
            "value": 230398.2627690837,
            "unit": "iter/sec",
            "range": "stddev: 1.2421208406400215e-8",
            "extra": "mean: 4.340310503999973 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_trust_long_nested",
            "value": 32504.52964662584,
            "unit": "iter/sec",
            "range": "stddev: 2.8658203426725295e-8",
            "extra": "mean: 30.764942943999987 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_shallow",
            "value": 2323144.3143125516,
            "unit": "iter/sec",
            "range": "stddev: 4.659457952914965e-9",
            "extra": "mean: 430.45108900000173 nsec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_nesting",
            "value": 165373.5977719197,
            "unit": "iter/sec",
            "range": "stddev: 1.4612991185220609e-8",
            "extra": "mean: 6.046914462000046 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_cext_notrust_long_nested",
            "value": 25720.349156527875,
            "unit": "iter/sec",
            "range": "stddev: 4.6776426020826924e-8",
            "extra": "mean: 38.87972103000001 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_shallow",
            "value": 665879.1402858361,
            "unit": "iter/sec",
            "range": "stddev: 3.412651728968623e-9",
            "extra": "mean: 1.501774030000007 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_nesting",
            "value": 63153.21596236615,
            "unit": "iter/sec",
            "range": "stddev: 3.064964669517793e-8",
            "extra": "mean: 15.834506363000003 usec\nrounds: 20"
          },
          {
            "name": "tests/test_bench.py::test_native_long_nested",
            "value": 8587.462613456488,
            "unit": "iter/sec",
            "range": "stddev: 1.3956412485318915e-7",
            "extra": "mean: 116.44883302700006 usec\nrounds: 20"
          }
        ]
      }
    ]
  }
}