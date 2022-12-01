# 注意

Windowsの方は最初にルートディレクトリで、下記のコマンドを実行してください。

``` sh
chmod 444 docker/mysql/my.cnf
```

# コマンド一覧

## コンテナ起動

``` sh
docker-compose up --build
```

## コンテナに入る

``` sh
docker-compose exec mysql /bin/bash
```

## mysqlにrootユーザーでログイン

``` sh
mysql -u root -p
```

## パスワードを入力

``` sh
# ※入力しても反映されないので注意
rootPassword
```

## コンテナを修了する

``` sh
# ※docker-compose up --build もしくは docker-compose upで起動している場合
Ctrl + C
```

## コンテナを削除する

``` sh
docker-compose down -v
```
# practice
# practice
# test12/0