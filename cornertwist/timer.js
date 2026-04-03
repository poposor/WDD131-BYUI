// import { calcAo } from "./helper.js";

const builtIn = {
    "3x3": [
    "U' R2 U F2 U' B2 D' F2 B L D' R D' B' F' U' B2 L2",
    "D B2 R2 U' R2 D' F2 U F2 U' F2 L F U2 R D L D2 B2 F' U'",
    "F2 D' B2 D2 B2 D' L2 D R2 D L2 D' F' U' B L' D B' U2 F' U2",
    "U2 F2 L2 D2 B' L2 F D2 B' L2 F U' F2 D L F2 U' R2 F2 U'",
    "L F' L U2 F2 R2 U B2 D' L2 D U2 L2 B2 L B R D2 L' B' D",
    "L B2 L B2 F2 L2 B2 U2 R F2 L' U' F L D2 B L2 D' R'",
    "D' F' R2 B' D2 F' R2 D2 F R2 U2 F U2 L' D2 R' B' L2 B2 D",
    "L F' L2 B L2 F U2 F' U2 F L2 U2 D F R F2 R' B F2",
    "U2 B2 L2 D' F2 D L2 R2 B2 U R2 U' B' D' L B2 R2 F R2 F",
    "D' F' R' D2 R D2 R U2 L' R2 U2 B2 D2 B' U' F R D2 F'",
    "L' D' B2 L' F' L' D R B2 L2 D2 R' U2 L F2 U2 L' B2 D2 U'",
    "D B L' B D2 B' R2 L U' R2 D R2 D2 B2 D' R2 D F2 R2 L2",
    "B R2 D' R2 B2 R2 F2 U R2 D2 B2 D B D' L' D' B D F' L2",
    "R2 D' L2 D F2 D U F2 L2 B2 L2 F' D2 U L' R D2 U L B' L'",
    "R F2 D2 L' D2 L D2 F2 R B2 R' D' L2 R F2 D' U' F' U'",
    "R' F2 L2 B2 R' F2 U2 B2 R F2 U' B R' D B2 L2 U2 B U",
    "R2 D2 B2 F2 L B2 F2 L' F2 D2 U F2 L' B L2 R' F R D B2",
    "L' U2 R' B2 L2 F2 D2 B2 R F L B2 R F2 D' F L' U R",
    "F' D2 B R2 B2 D2 L2 B2 U2 R2 F L' D' U' L B' F2 R' U' F D2",
    "L2 F2 U' B2 D L2 U2 B2 U B2 U R U B' U L' B' U F D' B2",
    "B2 D B2 R B D F2 D' L' R2 U2 L2 F' R2 F B2 D2 R2 B' D2",
    "L' F R' U' L' D L' F B2 U2 B' U2 F L2 B R2 B' D",
    "U D' R' F2 U B' D2 R' F D2 R2 D L2 U' F2 U R2 L2 U' R2 F2",
    "U L2 B' D R F2 U' B' U L D2 B2 R B2 L F2 R2 U2 F2 L",
    "B2 R U2 R B2 F2 L U2 L2 B2 U2 L' U' F' L2 F' L' B' U' R2 D",
    "R' D' R2 U F2 R2 B2 D2 B2 U F2 R F' L' D B D2 F2 L' B2",
    "U2 F' L2 U L2 U B2 D L2 U' B2 D' F L2 R B' D2 U L' U",
    "F L2 B2 L' B2 L U2 R B2 F2 R U R' B' L' U' B2 L2 R",
    "U2 B2 R2 D U2 L2 U B2 D B2 U F L2 B D' L' B U2 L F2 U",
    "F U2 B' F' L2 F' U2 R2 U2 R F2 D' B U' R D2 L R2 D'",
    "D' R2 D2 R2 B2 R' D2 B2 R' F2 R B' L2 B2 F' R' U2 B",
    "U2 L D2 R' U2 R' B2 D2 L2 D2 R2 D L D L B F' D B2 R",
    "B2 R D2 B2 D' L2 B' U' B2 U' L2 D2 B2 R2 B2 D R2 U' R F'",
    "F2 R' D2 L' D2 L B2 R D2 B2 L' F2 B U2 B' F2 U' L U2 R2 F'",
    "L2 D2 L2 B' U2 B2 L2 D2 L2 F' L2 F' U' R' U2 F' L2 B2 U F R2",
    "L2 U L2 U2 L2 F2 R2 D L2 D2 L2 B2 R' U' F' L F' R B' U2 F2",
    "U2 B2 D2 B2 U' L2 F2 D B2 R2 L' B2 U' R' B F R2 U' F2 U",
    "D2 B F2 R2 U2 B2 D2 F2 L U2 R' B2 R2 B2 D' B' R B' R U2 R2",
    "R2 D2 R' B2 R' D2 F2 L B2 D2 B2 U B F R2 U L2 D2 F2 L' R'",
    "F' D2 F' B2 L2 D' U2 L2 D F2 U F2 R' B L F D' R D",
    "B' D B2 F2 L2 B2 D' F2 U L2 D2 L2 F U' L F2 U L D2 B",
    "B' R2 F' U L' F B' U B2 R2 D' R2 L2 U' F2 U' L2 D R' F'",
    "D' R F L2 F2 U L2 D L2 F2 U B2 F2 D R D' L2 B F' L' B'",
    "F D2 R2 D2 U L2 R2 F2 U' B2 R2 L' U' R U2 B' F' R B2 F2",
    "F' L B' U2 R' D R2 B U2 R2 U L2 D2 L2 B2 U2 B2 D' L2 B",
    "F D' L2 D2 B2 U F2 U' R2 F2 L2 F' U L F2 L2 D B' F'",
    "U2 B D2 F2 U2 F' R2 U2 B L2 F' R2 D B R2 D' B2 D' F2 R F",
    "D' B' L2 U2 F U2 F' D2 F' D2 L2 F2 L2 U R F U' L' U B' U'",
    "F' R2 U L2 F2 L2 U F2 D' U2 F2 D' F L' B' R' F D F2 R'",
    "U2 F L U' B2 D2 B2 R2 D L2 B2 D' L2 R2 B' F2 U' R' F U2 L",
    "D' B2 L2 D L2 F2 D2 R2 U' L2 U B2 L' R' F' U B' L2 F' D' F",
    "U B' L2 U2 L2 D L2 B2 F2 D' F2 D B2 R2 B' D' F2 L' B L B'",
    "B2 D' L2 U F2 U' B2 D F2 U R2 U R' F D F R B2 U' L' B'",
    "F' R2 D' B2 F2 D U2 B2 D2 R2 U' B L' F2 L2 D L' F U B2",
    "U' L' D' R2 U2 L2 U B2 R2 U' L2 R2 U L B F R' B U' L2 U'",
    "U F2 L' B2 R2 U2 R2 D B2 U2 B2 F L D' R B2 U R",
    "B D2 R2 U R2 U2 B2 D' B2 U' R2 D2 F D2 B2 U F R' U2 B",
    "B2 D2 U B2 U' R2 D R2 L U2 L B' D' B2 F2 U L' F'",
    "L R2 U2 B2 U R2 U' R2 F2 D R2 U' R B' D' R' D U2 F",
    "U B D R B U R F' U2 D2 B D2 B R2 F' D2 F2 L B2",
    "F R' D2 R' F2 U2 R F2 R2 D2 L' U2 R D U2 B F U' L R",
    "D F' U R2 U L2 B2 D2 B2 U L2 B2 L2 R' F' U F2 U F L' D'",
    "U' B R' F2 L' D' L' D' B' F2 U' F2 R2 U2 R2 B2 U F2 D F2 D2",
    "R' F R B D2 F L2 D2 R2 D2 F D2 B2 D' U2 R' U' F2 D' L",
    "U' D F2 R' L2 D' F2 B' R' L2 B R2 L2 U2 R2 B2 D2 B'",
    "D' R2 D B2 F2 D B2 R2 B2 U2 B2 D2 R B2 D B L B2 D R F",
    "L B' D2 R' L' U R L2 D R2 D R2 B2 U L2 B2 L2 U' B2",
    "R2 D' L F2 D2 L' D2 F2 R2 U2 B2 R F2 U L2 D2 B' R D L2",
    "D' F L D2 B2 R F D' U2 R' U2 R U2 F2 R2 D2 L F2 R",
    "U' F2 R2 D' U2 F2 L2 F2 L2 D R' U' B F D L2 B' U L2 U",
    "R' B2 L' D2 L' D2 F2 L' U2 F2 L B L2 R' B' L F2 D U' B' R2",
    "R' U2 F2 L2 D2 B D2 F' U2 B2 U2 R2 U2 D' B2 L' D' B' D' U' B'",
    "R L2 D' R2 U' L2 R2 B2 D' B2 D F2 U F L' B R' U L B'",
    "L' U2 B' R2 F2 L2 B' D2 B' U2 F R2 D' R' U2 R2 U B2 R U2",
    "B2 L2 D2 B2 F2 U R2 D2 F2 D' R2 F L U L' R2 D' R2 B F2",
    "U2 B2 D2 F L2 U2 B' R2 U2 B2 R2 F D' B' F2 D B D' R' F L'",
    "R2 L F U' R' B' U B' L2 F' D2 F' U2 L2 F L2 U'",
    "B' D F L' F2 U' L B U2 L2 D' F2 U' D2 R2 U R2 F2 R2 B2",
    "D2 B2 U L2 U2 B2 U' F2 L2 F2 R' U' B' D' U2 R2 F2 R' B'",
    "R' B' U' R2 D' L2 U' L2 U' L2 D R2 F2 L2 F' R' F' D' B2 R2 F",
    "F B2 D F2 D' B2 D2 F2 L2 R2 D' B2 L' D B L U B2 U2 B2",
    "D2 F U B2 F2 U L2 D R2 D' R2 D F2 U' F' U B' L R D U",
    "D2 R2 D' F2 R2 D R2 D' R2 B2 U' B' D' L' B' R D L B' U' B'",
    "B2 U2 F2 U2 L' F2 R2 F2 D2 L' D R U' B F D B' D' L' U2",
    "L D' R2 D2 F L' U F R U F2 R2 L2 U' B2 D' R2 B2 U F2 D'",
    "F' D R2 F R2 F2 D' B L D' R2 U' R2 F2 L2 B2 U F2 D' F2 U",
    "U2 F' U L2 D U L2 U R2 F2 L2 F2 L F L2 B U2 B R'",
    "U2 B U B L U R U' D F2 R D2 F2 R2 B2 R' U2 L2 D2 B2",
    "U2 L2 B' U' R2 B2 D2 F2 D' B2 R2 D' R B' L D' F2",
    "U2 F' R' B D2 L B' R' U F U2 F' L2 F D2 F' R2 F R2 B U2",
    "L2 U2 R2 F2 U L2 R2 B2 U' R2 U2 R2 F' R' B D' B' R2 B2 L B'",
    "B2 U2 B2 U2 R2 B' D2 F' L2 F2 R F' D R B' L2 R' F L2",
    "U2 F2 D' R D' R U D2 F R2 F' U2 F2 R2 B' U2 F' L2 U R",
    "U B2 L2 B' U R2 F2 L' B2 U' L2 B2 U' F2 L2 D2 L2 U D2 R'",
    "F D2 F D2 B2 R2 F' D2 F R2 L F2 U2 F' L D' F U' F",
    "B' U' R2 L2 U' B2 R B D L2 B2 R2 D2 B2 L D2 R' U2 L' F2 R",
    "B L' D' F' U' L' B D' B R2 D L2 D F2 D L2 B2 D L2 U2",
    "B U R D' F' R' L D' R L2 U D2 L2 D' F2 U R2 F2 U2 R2 D'",
    "D B2 L F2 U2 R2 U2 L B2 L D2 U2 R' D' R U2 R2 F' U2 F2 L2",
    "U L2 U' F2 L2 D2 B2 L2 U2 F2 L2 R' D2 U' B D B2 F' D2 L' U'"
],
"4x4": [
"U2 R2 L' U2 F D F2 B R' U2 R L2 B2 R2 F2 R U2 R' D2 B' D Uw2 B Fw2 Uw2 Rw2 F R2 U2 B Rw2 U D' Rw' D' F2 L Rw Fw2 L Fw' U D2 Uw' Fw2 Rw2",
"L2 D' L2 B2 D' L2 B2 R2 F2 D F B2 D B' R2 L F2 B R' D Uw2 Fw2 R' B Rw2 Uw2 B' R B2 L2 B Uw' R' F' R Fw2 Uw Fw' U Rw2 Fw' Rw D2 R'",
"R2 B R2 L2 B2 R2 F' U2 F2 R2 U' D2 R2 B' R U2 B' D' L U' R' Uw2 B2 R' Uw2 Fw2 U2 F' L B2 Rw2 U2 B2 Fw2 Uw F' R' U' Fw2 L' B2 Fw' Uw Rw B' L2",
"D F B2 L' U R' B2 U2 D L2 B U2 R2 F R2 B' L2 F' L2 B2 D Fw2 D F2 L Fw2 L' B2 Uw2 L2 Fw2 R D' Rw2 F' D2 Fw D' L' Rw' Uw L Fw U' D2 R",
"B L2 U2 R2 L' F2 D2 R D2 R' U2 D' F2 R D2 R' F L U D2 Fw2 D' R' F2 D' L Fw2 Rw2 B2 L2 D' R' Rw2 Fw' D' L Uw2 L2 Fw' L2 Rw' F R D2 Rw' D2",
"B' R' U2 L2 F2 L D2 L2 U2 L' U2 F2 B' D' F L2 D2 L U' D Rw2 D' L' B2 D2 Uw2 Rw2 D L D2 F2 Rw2 U' B' Fw R B' Fw2 L2 Rw' Uw' R' F' Rw B2 Uw'",
"B' R2 F2 U' F2 R2 D B2 U2 B2 R F' R2 D B D' B U Fw2 L Uw2 B' R Uw2 R2 L F' D2 R' U2 Uw' R2 D2 L' F' R Rw B' Uw2 L F Uw",
"U2 R' B2 R U2 B2 L2 F2 R U2 B2 L U' F U' L' D2 B' R U2 B2 Fw2 D' Uw2 Rw2 F2 D R' U' D' R2 Uw2 L Fw D2 F Fw R' Uw' R U' L F Rw' Uw L'",
"F2 L F2 D2 R2 B2 L' F2 R U2 D2 L2 D L' U' B L' B' U L2 B' Uw2 R' B2 Fw2 U' R' L Fw2 R L' D' R Fw' D F L2 Fw2 Rw Uw' R2 D' F' B' Fw' U2",
"U R2 U2 R2 U2 L2 B2 U' R2 B2 R2 F R' F D' L' U' F' D2 F' Fw2 L2 D' Uw2 R2 L' Fw2 U' L' F2 U' B2 Fw R Rw2 Uw2 B R L2 Uw Fw' L2 D Rw Uw",
"B2 U2 F2 R' U2 R U2 L2 D2 L' B2 R' F R' B2 L2 B' D R' B Rw2 U Fw2 L' D2 L Uw2 R D Rw2 D' B Fw U F B' D Rw' F Uw2 B2 U' Uw Fw D'",
"U D2 L' U2 F D' R D' L2 D2 L D2 F2 U2 D2 L' B2 R B2 L2 Uw2 Rw2 F' U2 R' Fw2 U2 Rw2 F L D2 F Uw' L2 D Rw2 Uw Fw2 Rw F' U' Fw' D2 Rw2 Fw",
"D B' L2 D2 F2 R2 B R2 F' U2 F L' U' B2 D' L2 F L' B' Rw2 B D Uw2 Rw2 D2 B2 Fw2 U Fw2 U2 F' U2 Rw' B D2 L2 Rw2 Fw2 Rw' D Fw D Uw' B2",
"R2 U2 F R2 B' R2 F2 U2 B' R2 L' U F U2 D F' R2 L' U2 D' Uw2 L' F Rw2 Uw2 R F' R2 Uw2 L2 Fw2 R F' Uw' R' B R' Uw Rw Uw R2 Fw2 R2 Rw' U2 F'",
"L' D' F' B L2 B D2 R F2 D2 B2 U' B2 D F2 U' R2 L2 D' F Rw2 F2 Fw2 L Fw2 D' Rw2 B2 U B2 R Fw U2 F' L B' U2 Rw Fw' U' F' Uw2 Rw Fw R'",
"D2 R2 D' F2 L2 D' F2 R2 U2 R2 L' U' B R U' L U2 F D2 Rw2 Fw2 D' F2 Uw2 R2 Fw2 D2 L' B2 Fw2 U' D2 Fw' L D2 Fw Rw2 B' Uw' Rw U' D2 Fw R2 Uw'",
"L D2 L2 F' B' U2 L2 B U2 B U R U2 F2 L' F D2 L2 U Fw2 D Fw2 Uw2 L2 Rw2 U L2 F B2 U2 D' Rw F' U F' R' B Rw2 Uw' F2 Rw' B2 Fw' L Uw2",
"L D2 F2 L D2 L B2 D2 L' U2 F2 L2 D' B' U L D R' B' R' B2 Uw2 R' B D2 R B' R2 Fw2 Uw2 B' R Rw2 Uw Fw2 L B R' Rw' Uw' L' Fw2 L' Uw' R B'",
"D2 R F2 L2 F2 D2 L' U2 B2 L' B2 U2 D' F' U R' F2 U R' U' R Fw2 L U Rw2 Uw2 L Fw2 D' L Fw2 U2 F2 Fw' L2 D2 B' D' Uw L Rw' Uw R2 Uw B R",
"U2 B2 L D2 F2 L2 B2 R2 D2 L' B2 D' R' B L' F' D F U' R F Fw2 R Uw2 B2 D' Fw2 L U' L Rw2 D R' Rw2 Fw D' R F B Rw B2 L' Rw2 F Uw F2 Rw",
"L2 D2 B2 L' D2 R D2 R B2 R' D2 F' B2 D' F' U' L B' U2 R2 L2 Uw2 Fw2 R B R' L F Uw2 B' R' L D' Uw2 L Uw' Rw2 Uw' R D2 Uw' Fw' Uw' Rw D' Fw'",
"U L2 F2 D' F2 U B2 L2 U L2 B2 D2 F U B' R' D' B2 R' B2 Rw2 U L Fw2 U' R F2 U R F Fw Rw2 Fw' U2 B Rw2 D' Rw' F2 Uw R' D'",
"R2 F' L2 F L2 F2 R2 U2 B2 D2 R' B' D' F D L' U' B' U2 Uw2 Rw2 F2 U2 R' U Fw2 D' L F2 D' B2 Fw' D' L' U' L' Fw2 U' Rw' Uw R' Fw' D'",
"B' R L2 D' L2 D2 F2 B U' B D2 F' U2 D2 L2 B U2 R2 F2 Rw2 Fw2 L' F' R2 B' L2 Uw2 F Fw2 U2 B' Fw2 Uw Fw2 U2 F2 U L Fw D2 R' Uw L' Uw2",
"L F L D B' L2 U2 R L2 U2 D L2 B2 D' F2 D B2 Fw2 Uw2 B' L' F2 Uw2 R2 F' Fw2 Uw2 L2 F R U' Uw R2 F' D L2 Fw Uw' L' Uw' Fw' R",
"F' U2 B D2 L' U' D' R F2 U2 D2 L' D2 R2 U2 B2 R' U D2 L2 Fw2 D Uw2 F2 R' Fw2 U' L' D' Uw2 L F2 D' Fw' R' B' D' Fw' R' Rw' F2 Rw2 U Fw' Uw2",
"U2 D2 F2 D2 F R2 B' U2 B2 L2 B' D' L U F U' R2 U' F2 L' Fw2 L D2 Rw2 F' R B R L' Uw2 R' B Uw F' B2 U' F U' L' Rw' B' U2 Uw Fw2 Uw2",
"B2 R2 D L2 B' U2 L B2 R' U2 F2 D F2 L2 B2 D F2 U' B2 U2 Uw2 Rw2 D' R2 U' Fw2 R2 B D F' B' Fw2 Rw U R' F' D2 Fw R2 D2 Uw L F2 B'",
"U' L2 F' D R' U F' B' U' L2 U2 L2 B2 U2 B R2 F' D2 F2 U2 F2 Fw2 Uw2 L' D2 B Uw2 R D2 R' B2 L' B' Rw2 Uw B' D2 B' R' U' Rw' Uw L2 Uw Fw2 Rw F'",
"R F R2 B2 U2 L' F2 R' D2 R L2 D2 B U L U' L F U' B Uw2 Fw2 R D' Fw2 Rw2 U2 L' Rw2 U' D' R Uw2 Fw R2 Fw' R' D2 L2 F Uw L2 Uw2 Fw' Uw F",
"U' R' L2 F2 U2 B U2 B2 U2 B' U2 L2 U' D R' D' B2 U R Fw2 U B Rw2 U D Fw2 D Uw2 R2 B' D2 Rw' B2 Uw2 R2 U' Rw' Fw2 Rw' Uw F2 D' Uw'",
"R U R2 L2 B2 U2 R2 U B2 D2 R2 U R' F' B' U2 R' B' D' Rw2 U Uw2 Rw2 F' R2 F D Rw2 Uw2 L2 B2 Rw F' L' B D' Fw' Uw F' R B Rw D2",
"D2 B' R2 F2 B2 U2 B2 R' F2 R' D2 F2 U L' B2 L' U' D2 F Fw2 Rw2 U' F' B2 Uw2 F' U Uw2 F2 B' Rw F' R Uw2 Rw F' Uw Fw R Fw2 U' L' Uw'",
"F2 B R F2 U D' F' U L D2 L' U2 R L2 D2 B2 L' B2 R' U' Fw2 U2 Rw2 D' R Uw2 B2 U F2 L2 Fw2 L Fw L' Fw' U D R Rw Fw' L2 U Rw' F' U",
"R' U F2 U R2 D R2 D B2 U2 B2 L2 U B' U' D2 F2 D B' L D2 Fw2 R2 D Fw2 D' F U2 Rw2 B' U2 L2 F Rw D' R' U2 R' F Uw Rw' F' Rw' Uw2 Rw'",
"R2 F' R2 U2 B L' D B D2 B' U2 R2 B D2 B' L2 B2 U2 F' U Fw2 U' Fw2 R' L Rw2 U R2 Fw2 U' B2 R Uw2 Fw Rw2 Fw Rw2 Fw U' Rw B D2 F L Uw",
"F2 D R2 B2 U2 L2 U F2 U F2 U R' U2 B2 L2 B' D B D2 B2 Fw2 Rw2 B2 L Rw2 D' Uw2 Rw2 F2 U2 F' Fw2 R Fw' U Rw2 Fw L2 D2 Uw' Rw B R D F",
"F' U2 F B2 R2 B L2 U2 F U2 F' L2 D' L D' F2 L2 F U' R2 F2 Rw2 F Uw2 L U2 Rw2 Fw2 U2 L' B2 Uw2 F2 L Uw' R' U' R' Rw2 Uw Rw' Fw Uw' L U2 F'",
"D' F L B2 R' B2 L U2 L2 D2 L B2 D F2 R F' R B' R2 D' Fw2 R' F Rw2 Uw2 L D2 F2 U2 Fw2 D2 L2 Uw R L D' R2 U' Rw D' Uw' L Fw' Rw' B2",
"R D2 L F2 L2 F2 D2 L' D2 F2 L' D B' U2 L' F R' F B2 U Rw2 U2 F' Fw2 Rw2 D' R2 F' U2 B U Uw2 Fw2 Rw' D' F Rw Uw2 B' Fw' Rw U' Fw Rw D",
"F2 R' U2 F2 L2 U2 F2 U2 B2 L2 U2 R D F2 B U F' D' L' D R' Rw2 B Fw2 R2 F' R B L Fw2 R' B R2 Uw Fw2 R2 B R L2 Uw L Fw' U L2 B Rw'",
"L2 F2 D2 B2 D2 B' L2 F U2 D2 L2 D R' B2 R' B2 L D' R2 U' B' Uw2 B2 L' U2 B Rw2 Uw2 L' F2 Fw2 Uw2 L2 F Uw' B' D2 L2 Rw2 B' Fw Uw R' D2 Fw2 U2 D",
"L2 U' B2 L' F2 B2 U2 F2 R' F2 R' D2 R2 F2 U L' D' F R2 L F2 Fw2 U2 D' Fw2 Uw2 L2 Rw2 F' R2 B' Uw2 B Rw' U2 Fw2 L' B D Uw Fw2 Rw' B' L' U R",
"U2 F R D L2 B R L2 U2 L2 B2 L2 U2 B' R2 U2 F L' D' Uw2 F2 R2 Uw2 R' B R' Uw2 R L B' L2 Uw' R' L2 D B2 Rw' Fw2 Uw L' U' F2 Fw' Rw'",
"D R B R' D B U F U2 D2 L B2 L U2 L2 D2 L2 D2 L Fw2 Rw2 Uw2 R2 B' D2 B' Fw2 Uw2 L Rw2 F' Uw Fw2 U B2 Fw2 D' Fw' R2 U Uw R' F Uw'",
"R D2 R' F2 R L U2 F2 D2 F2 D2 B' U2 B' U F R' U B U2 Rw2 U Uw2 B Uw2 F L2 Fw2 D' L2 U B' D Rw' D R2 U' F L2 Uw' Fw' U' Uw2 L' Uw'",
"D2 B' L D F' L B' U D' F2 U' L2 U' F2 R2 D' R2 L2 F R' Uw2 L' Uw2 Rw2 Uw2 F2 L F L' Fw2 Uw2 R2 Uw' R2 U F2 Uw' B2 R Fw' R2 L' Uw F'",
"L2 D' B' U F D R F B D B2 U' R2 U' F2 D' F2 L2 U Fw2 U Rw2 U2 B' Uw2 L2 U B' Rw2 F Fw2 D Rw Fw2 L D' Fw2 L Fw Uw' F2 R Rw' Fw Rw'",
"D2 F' B2 U D2 R L2 D B D2 L2 F2 D2 R2 B' R2 F' U2 B R L2 Fw2 R2 U Uw2 L F2 Uw2 F2 R' D' R Uw2 B2 Fw' U2 L' F' Uw2 B' Rw D' B Uw Fw2 Uw Fw",
"R U D L' D R2 B' D' F' U2 R2 B2 D2 B' L2 F2 R2 D2 R' L2 Rw2 F' R2 Rw2 Uw2 B' U2 L' F2 R' Uw2 B' L2 Uw F2 U' R F Uw2 B Fw D2 Uw' B Fw L' D'",
"D R' D F' L2 U2 R U L' B2 R' D2 F2 L D2 B2 L2 B2 L' F2 B' Fw2 R D' Rw2 U' L' Rw2 Fw2 R Uw2 L D Uw2 B2 Fw L U2 L Rw B L Uw' Rw Fw D'",
"L' F2 D' B' R' D' R B' U2 B' R2 F' B2 U2 D2 L2 B2 R' D2 Rw2 U' L' Fw2 R' U2 Fw2 U2 Uw2 R' F2 Uw2 F2 Fw D' L' F' Rw' B' Uw R D2 Fw2 L",
"U' D2 B' U' L U' R' F L U2 L D2 L2 F2 L' D2 B2 R' B2 U2 B Fw2 U2 R2 Uw2 F2 U' F' D' Uw2 B' Rw2 D' Uw2 Rw' F' U2 D' L Uw' Fw' Rw' Fw R2 F2 Uw",
"R B D2 B' D2 F' L2 F R2 F U R' B2 R2 D B' R' L2 U Uw2 L2 F' U2 F Uw2 Rw2 F D Fw2 Uw2 Fw2 U Rw D' Rw2 B Uw2 R' Uw' R Fw U' L2 Fw'",
"D F2 B D' R2 U' R2 U2 B2 U F2 L2 B' R' F R' F2 B U' B' L Uw2 R2 Fw2 U F2 Fw2 L' D' R2 L2 B2 Uw2 Fw U D F Rw2 B2 Fw L' Uw' F B Rw Fw'",
"D B U R' U2 R' B2 D2 R' U2 R B2 R' D L B' R2 B2 D F' Fw2 R' Rw2 U2 L' F Uw2 R Uw2 B' L U2 Fw2 Uw' F2 Uw2 R2 F L' Rw F Fw Uw' Fw' Uw' Fw",
"F2 D' F U D' R F' D2 R B2 D2 R2 F2 L2 D' B2 U R2 D2 Uw2 F2 Rw2 Uw2 B Uw2 B' R2 U' B2 L2 F2 U' Rw B U' B L Uw2 Rw' Uw' Fw Uw2 Rw' F Rw'",
"L D2 R2 B2 D2 F' D2 F R2 U2 R2 F' L' B2 U' B2 R2 D2 F' U R' Fw2 Uw2 B' L D2 R' Rw2 U2 F Uw2 L' U Uw F' D Uw2 F2 Rw' U2 D2 Fw' U2 D' Rw",
"R F L2 D2 B2 U F2 D L2 F2 R2 L2 D2 F L F' L' D2 B' L F Uw2 Rw2 F' L' Uw2 L' F U2 Uw2 Fw2 Rw2 B2 U2 Uw' F2 B' R' Uw R' L2 Uw2 Fw' R' L' Rw",
"B2 L D2 L2 B2 L' D2 F2 R B2 R' B L F R' D' L2 D F2 L2 Uw2 L Rw2 U' B2 Uw2 Fw2 U L U2 F2 U2 L' Fw' Uw2 F2 R Fw2 Rw' Uw' Fw2 D2 L Fw R' F'",
"D R2 D B' D' R B' U' R2 U2 F' U2 F' D2 F' D2 F' U2 L2 Fw2 R2 D' Uw2 F2 L' U Rw2 B2 R D R2 Uw2 Fw R2 U F2 B' Fw Rw D F' B' Fw' Rw' Fw'",
"D2 R U' D L F' B L U2 R2 U2 F' L2 B2 R2 F R2 B L2 Fw2 Rw2 Uw2 F Rw2 U' L2 U2 D Rw2 B2 D' Fw2 Rw' U D L Fw R2 L Uw' L' Fw2 U F",
"D F L2 F2 U2 L2 B D2 B' D2 B2 L2 F' R' B U L' F2 B L' B2 Rw2 D B' Fw2 D Rw2 U Uw2 F2 D F Rw2 F' Rw' U' D' F' Rw' F U' Uw R' B L' Uw'",
"R U2 B2 D2 R' B2 D2 R L2 U2 F D' L' D L2 D' B2 U2 B R' Fw2 L D2 Rw2 D' Fw2 L D' L Rw2 Uw2 L2 U2 Fw L' F2 U' Uw Rw' D2 Fw2 U B D' Rw",
"L' D' R2 F L D F' U' R D' F2 D' F2 L2 D2 F2 B2 R2 D' B2 Rw2 Uw2 F2 L' Uw2 L' Fw2 U' B2 Rw2 D' Rw2 Fw' U' R2 Rw2 D L2 Rw' Fw' D Fw2 U2 L Rw",
"U R' F D' L2 F' D F' U F2 D F2 L2 U B2 U2 R2 B2 R2 D Rw2 U' R D L' U' B2 Fw2 D Rw2 B2 Uw2 F2 Fw' Rw2 F U' B L2 Rw' D2 Uw' Rw2 Uw Rw",
"D' R' B2 U2 R2 D2 R2 B2 L' B2 L F2 U F' L' U' D2 B2 L' D Uw2 F U2 L2 F U2 Rw2 U' R2 Rw2 D2 Rw2 F' Rw' D' Rw2 U2 F' Rw2 Uw' Rw Fw2 R' B' Fw2 D2",
"U' L2 D' B2 U' B2 R2 D' R2 U F2 R' D' F B' L' B' L2 U' D Fw2 Uw2 B2 L' Rw2 Uw2 F U2 R Uw2 L F2 Uw R' U2 F' U L' Fw' L2 Fw' Rw F2 Uw' Rw",
"B R D2 B R L D B U F L2 D2 B' U2 F' R2 B' L2 B' D2 Fw2 L2 Uw2 F L Fw2 L' F' D2 B R' Rw2 U' R U' Uw' Rw2 Uw Rw D Fw Uw2 F' D Uw'",
"R' D2 B' U2 D2 F2 R2 B' D2 R2 B' R2 D R L F L2 D2 R2 U' Fw2 U2 Rw2 U2 F D Rw2 U' B U R2 U' L2 Rw' U2 F Uw2 F' D Fw U' Rw Fw2 U' Rw D2",
"U B2 U' L' F2 R F2 D' B R' L B2 D2 B2 U2 L U2 B2 R U2 R Uw2 L' U' Fw2 D' F2 R Uw2 Fw2 L2 U2 D' Fw L2 F' B2 D Rw' Uw' R Uw' Rw' D2 Uw L",
"R D2 R' F2 D2 B2 R U2 R D' F R U' R' U' L B' U2 R Rw2 U' R Fw2 L U2 R2 D B2 L Rw2 Fw' Rw2 Fw' U' Fw D2 B2 Uw Fw R' Uw2 L'",
"F L2 F2 U F2 D' R2 F2 B2 U F2 U' R' B R' D B2 U B2 Fw2 L Uw2 B Rw2 F' R' F' Rw2 F' R2 L' Uw' R F2 L' Uw R B2 Uw' Fw Uw F' U' Rw'",
"F2 D R2 U' L2 U' L2 D2 F2 D B2 D2 R U D L' B2 L B R' L2 Uw2 Rw2 D R' Fw2 L' F2 L' U Uw2 F2 Rw2 D2 Fw' R' L Fw R2 D' L2 Fw' Rw' D2 Rw2 Uw'",
"B2 L' F' U2 L' B2 D2 B2 U2 L' B2 R F2 D2 F D L2 U2 F Rw2 U Uw2 F2 U2 Rw2 D' L F2 L Fw2 L' D Fw U2 F R' Fw Uw L Uw2 L2 U2 B2",
"F' U2 B' D2 F' U2 B' L2 B2 D2 R L2 B' R2 D F' U L B U2 B Rw2 F Uw2 B' D' B2 Rw2 B' R2 U L2 Rw2 U' Rw B L2 U' D2 Fw2 Uw2 Fw L Rw Fw' D",
"R2 D B2 U F2 L2 F2 L2 F2 R2 D R2 B' L' F' L' U' L B R' Fw2 L2 Rw2 F' Uw2 R2 U Rw2 B2 Rw2 B2 U' Rw' B' D F' D R' Fw' D Fw Uw L Fw Uw'",
"F' R2 U2 F U2 R2 F D2 L2 D2 R2 U F R' B2 U F' D' R D2 F2 Uw2 F L2 F' Fw2 D' Rw2 Fw2 D2 R2 Rw B2 D R U2 Rw Uw L' Rw D' F' Uw B2",
"L' B' R2 F U2 R2 U2 R2 B R2 U2 F U F' L F2 R' U D' R B2 Uw2 L' Uw2 Rw2 F2 Uw2 F' Fw2 Uw2 L' B' D' Uw B R2 Uw2 R' Fw Uw L' U2 Uw' Rw' U'",
"B R2 F R2 B2 L2 B2 U2 B' R' B2 L' D' B' U' R' L' D' L' Uw2 R U2 L2 D2 F Fw2 Uw2 B' R' Uw2 F R Uw F' L2 D2 R' Uw' Rw' Fw' Rw2 F Fw' L2 Uw",
"F2 L2 B' D2 F' B2 R2 D2 F' R2 D2 R' U' R2 U' D' L U2 F' Uw2 B2 Rw2 Fw2 L' Uw2 L' U' L Fw2 D2 L Fw Uw2 B R Uw L Rw' U2 Uw' Rw' D2 Uw'",
"U2 R2 B' U2 R2 B' L2 B2 D2 L2 U2 L D F R' D2 L' U D L' F' Fw2 L Uw2 F Uw2 R2 Fw2 Rw2 F R' F' L2 U' F2 Uw B R' L Fw L Uw' Fw2 L' B Rw'",
"F' L2 U2 B' D2 B' R2 B D2 B' D2 B L' U2 D' F L2 B2 L U2 B2 Uw2 F' L2 B' Fw2 D2 Uw2 B2 L B' D2 Uw' R B2 D B Uw2 B D2 Fw D2 Rw' U Rw2",
"R' F' R' B R L D R B2 R F2 B2 R2 U2 F2 L U2 R U2 F L' Fw2 D2 Fw2 D' F2 D' R' Rw2 Fw2 Uw2 R F2 Fw D2 L U2 R2 Uw Rw U' Rw' B Fw D",
"U' L' U2 R2 U L2 B2 L2 U2 R2 D' B2 U' R2 B' D' R L2 B D L' Fw2 D' Uw2 R' D' Rw2 D' Uw2 L' D2 Uw2 L' U Fw R' F' R2 Fw R' Uw F2 Fw' Rw Uw Rw B'",
"F D2 R2 B2 D B' R U L2 U' F2 D' B2 U2 F2 D' R2 L2 D2 F' Rw2 D L' Fw2 D' Uw2 L2 Uw2 R' L2 U F' B2 Fw' L F D Rw' U2 Uw Fw2 Rw' Uw Fw2 U2",
"R2 D' F2 L2 F2 B2 U' R2 D R2 F2 R F2 L' B D F2 U' R2 B R2 Uw2 R B2 Uw2 L D' Fw2 D B2 D' B2 L' U2 Fw' R2 F' U' R Rw' Uw' R' F' L' B Rw",
"R F2 R F2 U2 B2 U2 R B2 L B2 L2 U' F2 B U B L' F R2 Rw2 Fw2 D2 F' D' B2 Rw2 F' B2 Fw2 D' R2 Rw' D' R2 Rw' U L B' Fw' L2 Rw D Rw",
"D' B D2 L F2 R L U2 B2 R' F2 U' F D2 R' D2 R F B Uw2 R' Rw2 Uw2 B L2 B Fw2 Rw2 D2 L' U B R' Uw F2 D' Rw' D2 Rw' B Fw Rw U' Fw2",
"D' F2 L2 U' D2 L2 B2 L2 B2 D B2 L2 B' L2 D' F2 L' U2 D' R B' Fw2 D2 Fw2 U' B2 Fw2 L Uw2 L B2 D' Fw2 R' F' L' Fw' U L' Uw' L' F2 Fw Uw' R' L",
"R' F' L2 U' B2 R2 L2 D R2 F2 L2 U' B2 U' F U L' B2 U2 L' D Uw2 R Rw2 B Fw2 L B2 Fw2 Uw2 R2 B' Uw L2 F' B U2 F' B Fw Uw Rw' F B' Rw2",
"D F R2 B D2 F2 R2 U2 D2 R2 B D2 F2 U' R' F R2 U B2 U B Fw2 Rw2 Fw2 R' D' F2 D2 Fw2 Uw2 F2 R D' Fw' L D2 R U B2 Rw D B' Uw Fw L' D",
"U F R' F R U' B' U' F' R2 F D2 R2 B U2 B2 U2 L2 F2 L' Fw2 D2 L U2 R2 F Uw2 Rw2 B Fw2 U2 D F U' D2 Uw F' Rw' Fw Uw Rw2 B' U Rw2",
"R2 U L B2 R2 B D L F2 D2 R F2 B2 U2 L' F2 R U2 L2 B Rw2 D Uw2 F Uw2 Fw2 Uw2 L2 F2 U' L2 Fw2 D2 Rw' D F R Rw2 Fw U L2 Uw Fw' L' F U'",
"R2 U D L2 F2 B2 D2 R2 U' F2 B2 L' D R D B R' F U2 B' Rw2 F' R2 Uw2 B' Rw2 D' B D2 R2 U R' Uw2 Fw2 D2 Rw' F' Uw2 Fw' U2 Fw' Uw' Rw B2 D'",
"B' U2 R2 D2 L2 B2 D2 L2 B2 D2 R F2 R F R F L U' L U2 B Rw2 B' R2 Fw2 L D2 F2 U2 L Rw2 B L' Uw B2 U B L' F' Fw U2 L' Uw Rw' Fw' R' L2",
"F' L B R2 B' U2 F2 D2 B' U2 R2 B2 U' L' F' R U D R' L' Fw2 U F2 Uw2 B' L2 F D' F2 Uw2 B' L Uw2 B' Rw' B2 L' Uw Fw' Rw' F' Uw F2 U",
"R2 D F2 U' L2 B2 D B2 D' F2 D2 F' D' R' D' R2 F2 L D2 R Rw2 U R2 D2 L Fw2 R Fw2 Rw2 U' R2 Fw' R2 F2 U' R2 F2 Uw' L2 Fw' U' Rw' F2 R' Rw",
"B2 U R2 D F2 B2 U' D B2 D' L' D' B2 L2 F D' L2 F R' B Rw2 U' Fw2 D' L Fw2 R' D F2 D R B D Fw' L B2 Uw R2 Fw Rw2 F2 B D L'",
"D B2 L2 U' R2 U' L2 U B2 U' R2 D F L' U2 F2 R' B U2 R2 B Fw2 D' Rw2 Uw2 B' R2 U Fw2 D' L2 Rw2 U D Rw F' R2 Rw' U2 Uw' L' Fw L' U2 Uw Fw'"
]
};
let groups = [
    {
        name: "1",
        solves: [
            // {
            //     time: 13.65*1000,
            //     scramble: "U' R2 U F2 U' B2 D' F2 B L D' R D' B' F' U' B2 L2",
            // },
        ],
    },
];
let groupIndex = 0;
const timer = document.getElementById("timer");
let timerStarted = false;
const scramble = document.getElementById("scrambleDisplay");
const scrambleType = document.getElementById("typeSelect");
scrambleType.addEventListener('change', (e) => {
    newScramble();
});
function newScramble(){
    scramble.innerText = builtIn[scrambleType.value][Math.floor(Math.random()*builtIn[scrambleType.value].length)];
};
newScramble();
document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        event.preventDefault();
        if(timerStarted){
            groups[groupIndex].solves.push({
                time: Date.now() - timerTime,
                scramble: scramble.innerText
            });
            updateSolves();
            clearInterval(runTimer);
            timer.style.color = 'lime';
            newScramble();
        }
        else{
            timer.style.color = 'red';
        }
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key === " ") {
        event.preventDefault();
        if(timer.style.color == 'red' && groups[groupIndex].solves != undefined){
            timerStarted = true;
            timerTime = Date.now();
            runTimer = setInterval(updateTimer, 10);
        }
        else {
            timerStarted = false;
        }
        timer.style.color = 'black';
    }
});
function updateTimer(){
    timer.innerText = ((Date.now() - timerTime)/1000).toFixed(1);
}
const groupSelect = document.getElementById("groupSelect");
const groupSelectOptions = `<option value="New">New</option><option value="Delete">Delete</option>`;
groupSelect.addEventListener('change', (e) => {
    let selectedGroup = e.target.value;
    if(selectedGroup == "New"){
        newG = prompt("Name for new group:");
        console.log(newG);
        if(groups.findIndex(i => i.name == newG) == -1 && newG != "New" && newG != "Delete" && newG != null && newG != ''){
            groups.push(
                {
                    name: newG,
                    solves: [],
                }
            );
        }
        groupIndex = groups.length-1;
        updateGroupSelect();
        updateSolves();
    }
    else if(selectedGroup == "Delete"){
        delG = prompt("Name of group to be deleted:");
        delI = groups.findIndex(i => i.name == delG);
        if(delI > -1){
            groups.splice(delI, 1);
        }
        console.log(groups);
        console.log("deleted group "+delG+" at index "+delI);
        console.log("current group index "+groupIndex);
        if(delI <= groupIndex){
            groupIndex--;
        }
        updateGroupSelect();
        updateSolves();
        
    }
    else {
        let newI = groups.findIndex(i => i.name == selectedGroup);
        if(newI !== -1){
            groupIndex = newI;
            console.log("changed group to index "+groupIndex);
            updateSolves();
        }
        else{
            console.log("group not found");
        }
    }
    
});
function updateGroupSelect(){
    groupSelect.innerHTML = '';
    groups.map((i) => {
        groupSelect.innerHTML += `<option value="${i.name}">${i.name}</option>`;
    });
    groupSelect.innerHTML += groupSelectOptions;
    groupSelect.selectedIndex = groupIndex;
}
const resultsTable = document.querySelector("#results table");
function calcAo(index, size){
    let times = groups[groupIndex].solves.slice(index-(size-1), index+1);
    let dropCount = 1;
    if(size > 12){
        dropCount = Math.ceil(size*0.05);
    }
    while(dropCount > 0){
        let aoMax = Math.max(...times.map(t => t.time));
        let aoMin = Math.min(...times.map(t => t.time));
        times = times.filter(t => t.time !== aoMax && t.time !== aoMin);
        dropCount--;
    }
    // let aoMax = Math.max(...times.map(t => t.time));
    // let aoMin = Math.min(...times.map(t => t.time));
    // times = times.filter(t => t.time !== aoMax && t.time !== aoMin);
    if(times.length < size-2){
        return "DNF";
    }
    let ao = times.reduce((sum, t) => {
        return sum + t.time;
    }, 0);
    return ((ao/(size-2))/1000).toFixed(2);
}
function updateSolves(){
    resultsTable.innerHTML = '';
    groups[groupIndex].solves.map((solve,i) => {
        resultsTable.innerHTML = `
        <tr>
            <td>${i+1}</td>
            <td>${(solve.time/1000).toFixed(2)}</td>
            <td>${calcAo(i, 5)}</td>
            <td>${calcAo(i, 12)}</td>
        </tr>` + resultsTable.innerHTML;
    });
    resultsTable.innerHTML = `
        <tr>
            <th>#</th>
            <th>Time</th>
            <th>Ao5</th>
            <th>Ao12</th>
        </tr>` + resultsTable.innerHTML;
    saveSolves();
}

function saveSolves(){
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('selectedGroup', groups[groupIndex].name);
}
function loadSolves(){
    groups = JSON.parse(localStorage.getItem('groups'));
    groupIndex = groups.findIndex(i => i.name == localStorage.getItem('selectedGroup'));
    if(groupIndex < 0){
        groupIndex = 0;
    }
}

if(localStorage.getItem('groups') !== null){
    loadSolves();
    updateGroupSelect();
    updateSolves();
}