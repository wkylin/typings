enum Choose { Wife = 1, Mother = 2} // 选择 妻子 还是 妈妈

function question(choose: Choose): void {
  console.log('你老婆和你妈妈同时掉进水里你先救哪个?');
  console.log('你的选择是： ' + choose);
}

question(Choose.Mother)