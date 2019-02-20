---
title: ABC113 D - Number of Amidakuji
lang: jp
---
# ABC113 D - Number of Amidakuji

[問題リンク](https://beta.atcoder.jp/contests/abc113/tasks/abc113_d)

## 問題概要
長さ $H+1$ cmの $W$ 本の縦棒がある．

縦棒 $1$ からスタートして縦棒 $K$ で終わるあみだくじのパターンの総数を $10^{9} +7$ で割ったあまりで出力する．

横棒を置ける場所には以下の条件がある．

- 上から $1cm$ ごとにしか置けない． $(1)$
- 横棒の端点は必ず同じ高さで，別の横棒と端点を共有してはならない． $(2)$

**制約**

- $1 \le H \le 100$
- $1 \le W \le 8$
- $1 \le K \le W$

<!-- more -->

## 解法
$W$ が8以下なので横棒をどう置くかは全探索できる． $O(2^{W-1})$

下図のように $W-1$ 桁の2進数で横棒のパターンを作成する．

この時，連続して1が並んでいるものは無視する． ← 条件 $(2)$

例として $W = 5$ であり得るそれぞれのbit列は以下のような横棒配置になる．

<img src="{% post_path abc133-d %}1.png">

横棒があったときは以下のように変化することが分かる．

- 縦棒 $i$ の右に横棒が伸びている場合は，1つ前にその縦棒 $i$ に到達したものが全て縦棒 $i+1$ に行く．
- 縦棒 $i$ の左に横棒が伸びている場合は，1つ前にその縦棒 $i$ に到達したものが全て縦棒 $i-1$ に行く．

あとは次のようなdpが考えられるのでdpする．

$dp[i][j] :=$ 上から $i$ cm の位置の横棒を通過した後に縦棒 $j$ に到達するパターンの総数

$dp[0][0] = 1$ で初期化しておき，最後までdpを進めると $dp[H][K-1]$ に答えが入る．

注意点として，問題文は1-indexedであるのに対し，実装は0-indexedにしていることである．

以上で全体の計算量は $O(H \times 2^{W-1})$ となり**AC**できる．

## ソースコード(C++)
```cpp
#include <bits/stdc++.h>
using namespace std;
const int MOD = (int)1e9 + 7;
int main(){
    int h, w, k;
    cin >> h >> w >> k;

    vector<vector<long long>> dp(h+1, vector<long long>(w));
    dp[0][0] = 1;
    REP(i, h){
        for(int mask = 0; mask < (1 << (w-1)); mask++){
            bool isRinsetsu = false;
            REP(j, w-1){
                if(mask & (1 << j) && mask & (2 << j)) isRinsetsu = true;
            }
            if(isRinsetsu) continue;
            
            REP(j, w){
                if(j < w-1 && mask & (1 << j)) (dp[i+1][j+1] += dp[i][j]) %= MOD;
                else if(j > 0 && mask & (1 << (j-1))) (dp[i+1][j-1] += dp[i][j]) %= MOD;
                else (dp[i+1][j] += dp[i][j]) %= MOD;
            }
        }
    }
    cout << dp[h][k-1] << endl;
}
```
