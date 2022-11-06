# プロジェクト概要
2020年以降、科学研究の新しいエコシステムが世界的に模索されており、民間研究所「Arc Institute」や長寿研究DAO「VitaDAO」のような活動に注目が集まっています。私たちは今回、NFTの活用により科学研究をアップデートするプロダクトの開発にチャレンジしています。開発中の「Research Innovation」では、研究を実施するうえで公開されてこなかった情報（Seed）をサービス上に共有することで、多様なステークホルダーからのコメントを得て、研究を加速することができます。またSeedをキュレーションすることで、他のユーザーに価値提供することができ、これがNFTの価値の源泉となります。プロトタイプをローンチ後、実際にユーザーに使ってもらいながら、NFTの価値が高まるインセンティブ設計をアップデートし、サービスの拡大を狙います。

# Github Repo
フロントエンド：https://github.com/alea12/academist-nft

バックエンド：https://github.com/asawada729/research-fork-sol

# コレクション購入方法
## 前提条件
* Metamask Walletを所持していること

## 1. テストネットへ接続する
Metamask WalletをGoerli Testnetに接続します。

1. ウォレット右上のプロファイルアイコンをクリック > Setting > Advancedを押す。
2. 下にスクロールし、「Show test networks」がONになっていることを確認する。OFFの場合はONにする。
3. ウォレット上部のネットワーク選択ドロップダウンを押し、「Goerli Test Networkを選択する」。

## 2. GoerliETHを調達する
1. Goerli上の通貨であるGoerliETHは無償で取得することができる。数あるGoerli Faucetより入手する。（https://goerliethfaucet.xyz/ がおすすめ。使えるFaucet一覧は以下: https://faucetlink.to/goerli ）
2. 基本的に0.02あれば十分なので、0.02を目安に取得する。

## 3. コレクションの購入
1. コレクション一覧より購入したいコレクションを選択する。
2. モーダル右下の「コレクションを購入する(0.01ETH)」を押す。
3. Metamaskよりトランザクション承認要求画面が現れるため、確認し承認する。


# Hardhat Project

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Environment info

Runtime
```
node: v16.2.0
npm/npx: v8.11.0
```
