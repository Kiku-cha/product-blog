# 個人制作 ブログサイト
HTML5 / SCSS / CSS / JavaScript / jQuery
レスポンシブ対応済みです。
※元々PHPで作成していましたが、HTMLに変更したものをアップしています。<br><br>
テンプレート：[Percolator](https://github.com/TsubasaHiga/Percolator)<br>
画像：[pixabay](https://pixabay.com/ja/)<br>
アイコン：[ICOOON MONO](https://icooon-mono.com/)<br>

<pre>ディレクトリ<br>
product-blog
┝ about(説明)
| └ index.html
|
┝ article(記事一覧・詳細)
| ┝ index.html
| └ detail
|   └ index.html
|
┝ assets
| ┝ css
| ┝ fonts
| ┝ images
| └ js
|
┝ inc
| ┝ footer.html
| └ side.html
|
└ index.html</pre>

----

PHP以外の方法でファイルのインクルード方法を探していたら、jQueryで可能とのことだったので、footerとサイドメニューの表示はそのように対応しました。
元々headerもインクルードできるようにしていましたが、ハンバーガーメニューに影響が出てしまったので、除外しました。
エラーの原因・改修はまだ弱いな〜、と痛感した個人制作でした。

2021/03/07
