function add(a: number, b: number = 0): number {
    // デバッグ用のログ出力
    console.log("add関数が呼び出されました:", { a, b });

    // デバッガーを使って実行を一時停止
    debugger;

    return a + b;
}

// 関数を呼び出して結果を確認
console.log(add(2, 3)); // 正常なケース
console.log(add(2));    // 修正後: b のデフォルト値が 0 なので、結果は 2 になる
