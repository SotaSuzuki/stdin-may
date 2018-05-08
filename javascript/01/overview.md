### Object

- 関数は呼び出し可能という
- 特定の属性を持つ2つのプロパティがある
  - データプロパティ
  - アクセサプロパティ

#### データプロパティ

| Property | Type     | default | description
| :------------- | :------------- | :---- | :--- |
| Value       | 任意       | undefined | アクセスすると取り出せる値 |
| Writable    | Boolean   | false | 変更可能か否か
| Enumerable  | Boolean    | false | `for in` で列挙可能か否か
| Configurable | Boolean   | false | プロパティを変更、削除可能か否か

#### アクセサプロパティ

| Property | Type     | default | description
| :------------- | :------------- | :---- | :--- |
| Get       | Function または undefined | undefined | アクセス時に実行 |
| Set    | Function または undefined   | undefined | プロパティを変更しようとしたときに実行
