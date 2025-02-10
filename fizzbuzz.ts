function fizzBuzz(n: number): string[] {
    const results: string[] = [];
    for (let i = 1; i <= n; i++) {
        let output: string = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        
        results.push(output || i.toString());
    }
    return results;
}

function displayFizzBuzz(): void {
    const results = fizzBuzz(200);
    const resultDiv = document.getElementById('fizzBuzzResults');
    if (resultDiv) {
        resultDiv.innerHTML = results.join('<br>');
    }
}

// ページ読み込み時に実行
window.onload = displayFizzBuzz;
