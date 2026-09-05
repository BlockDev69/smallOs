//BIOS
//512 bytes on disk
//store at 0xfc00

// magic string

//1; Init stack
//sp
//16bit register
//copy value to AX
//copy value from AX to SP
//copy2ax()
//copy2sp()

//2; print message
//copy AX, BX and maybe CX
//execute interrupt
//copy2ax, bx, cx
//biosinterrupt

//halt computer
//1.disable interrupt
//2.issue halt intr
//3.infinite loop e

//ctors for constructors
let ctors;

// reverse function
// bbbbbbbb aaaaaaaa
// 01011100 01011100
// 11111111 00000000
//          01011100

// >>8
let rev;
rev = val => {
  let a, b;
  let mask;
  let i;

  mask = 0xff;
  a = (val & mask);
  mask = 0xff00;
  i = (val & mask);
  b = (i >> 8);

  return String.fromCharCode(a).concat(String.fromCharCode(b))
}

//ax=b8 bx=bb cx=b9
ctors = {
  copy2ax: val => "\xb8" + rev(val),
  copy2sp: () => void 0,
  copy2bx: val => "\xbb" + rev(val),
  copy2cx: val => "\xb9" + rev(val),
  biosinterrupt: () => void 0,
  interruptoff: () => void 0,
  halt: () => void 0,
  jmp: addr => void 0,
  padding: amt => void 0,
  magicstr: () => void 0
};

let x, y, z;

x = 0xccdd;
y = ctors.copy2ax(x);

console.log(y.length)
// z = y.split('')
//   .map(a =>
//     a.charCodeAt(0)
//   );
//
// console.log(z);


