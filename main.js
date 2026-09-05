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

//ax=b8 bx=bb cx=b9
ctors = {
  copy2ax: val => "\xb8",
  copy2sp: () => void 0,
  copy2bx: val => void 0,
  copy2cx: val => void 0,
  biosinterrupt: () => void 0,
  interruptoff: () => void 0,
  halt: () => void 0,
  jmp: addr => void 0,
  padding: amt => void 0,
  magicstr: () => void 0
};
