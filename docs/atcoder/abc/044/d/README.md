---
title: ABC044 D - 桁和 / Digit Sum
lang: jp
---
# ABC044 D - 桁和 / Digit Sum

[問題リンク](https://atcoder.jp/contests/abc044/tasks/arc060_b)

## 問題概要
$n$, $s$ が入力される．

$f(b, n) = s$ となる $b$ が存在するか判定する．

存在する場合はその最小の値を，存在しない場合は $-1$ を出力する．

**関数 $f(b, n)$ の定義**

- $n < b$ のとき $f(b, n) = n$
- $n \geq b$ のとき $f(b, n) = f(b, floor(n/b)) + (n\%b)$
  - $floor(x)$は$x$を超えない最大の整数

**制約**

- $1 \leq n, s \leq 10^{11}$
- $n, s$ ともに整数

## 解法

- $n = s$ の場合は $b = n+1$
- $n < s$ の場合は無理なので $-1$
- それ以外の場合以下のように考える

桁数は$n$が0になるまでに $b$ で割れる数とも言える．

つまり $m$ 桁となる場合は

$$ n = \sum_{i=0}^{m-1} a_ib^i (1)$$

になる．

ここで，桁数が2桁になるときを考える．

$n$ は $\sqrt{n}$ を越える値で1回までしか割ることが出来ない

つまり $b > \sqrt{n}$ のとき

$$ n = a_0 + a_1b $$

$$ s = a_0 + a_1 $$

となる．

このとき，$a_1$ がどういった値になるかというと，

$b > \sqrt{n}$ および上記の式より
$$ a_1 < \sqrt{n} $$
となる．

また，上記までの式より

$$ b = \frac{n - s}{a_1} + 1 $$

これにより $a_1$ を決めると $b$ が一意に求まることが分かる．

ここまでで求めた方法で以下の2通りの方法で探索を行う．

- $b \leq \sqrt{n}$ は単に $b$ で全探索する．$O(\sqrt{n})$
- $b > \sqrt{n}$ では求めた式を使って $1 \leq a_1 < \sqrt{n}$ で全探索する．$O(\sqrt{n})$

上記で求めた $f(b, n) = s$となるもののうち最小の $b$ を出力する．

全体で $O(\sqrt{n})$ となり**AC**できる．

## ソースコード(C++)
```cpp
#include <bits/stdc++.h>
using namespace std;
using LL = long long;

#define FOR(i, a, n) for(int i = (int)(a); i < (int)(n); ++i)
#define REP(i, n) FOR(i, 0, n)

const LL INFL = (LL)1e18;

LL f(LL b, LL n){
    LL sum = 0;
    while(n > 0){
        sum += n % b;
        n /= b;
    }
    return sum;
}

signed main(){
    LL n, s;
    cin >> n >> s;

    LL ans = INFL;
    // s == n の時はn+1しかない
    if(s == n){
        cout << n+1 << endl;
        return 0;
    }

    // s > n の時は作れない
    if(s > n){
        cout << -1 << endl;
        return 0;
    }

    // √n以下の値で全探索
    for(LL i = 2; i*i <= n; i++){
        if(s == f(i, n)){
            ans = min(ans, i);
        }
    }
    
    // 1 <= a < √nで全探索
    for(LL a = 1; a*a < n; a++){
        LL b = (n - s) / a + 1;
        if(b < 2) continue;
        if(s == f(b, n)){
            ans = min(ans, b);
        }
    }
    cout << (ans != INFL ? ans : -1) << endl;
}
```
