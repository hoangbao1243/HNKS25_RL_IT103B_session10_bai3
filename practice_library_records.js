let borrowRecords = [
    {recordId:"PM01", studentId:"SV101", bookTitle:"Doraemon", borrowDays:10, isReturned:false},
    {recordId:"PM02", studentId:"SV102", bookTitle:"JavaScript", borrowDays:20, isReturned:false},
    {recordId:"PM03", studentId:"SV103", bookTitle:"Clean Code", borrowDays:12, isReturned:false}
];

console.log("=== BAN DAU ===");
console.table(borrowRecords);

borrowRecords.push({
    recordId:"PM04",
    studentId:"SV104",
    bookTitle:"Clean Code",
    borrowDays:18,
    isReturned:false
});

console.log("=== SAU KHI THEM PM04 ===");
console.table(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++) {
    let b = borrowRecords[i];
    b.fine = b.borrowDays > 14 ? (b.borrowDays - 14) * 5000 : 0;
}

console.log("=== TINH PHI PHAT ===");
console.table(borrowRecords);

for (let i = 0; i < borrowRecords.length; i++)
    if (borrowRecords[i].recordId == "PM01")
        borrowRecords[i].isReturned = true;

console.log("=== CAP NHAT PM01 ===");
console.table(borrowRecords);

let i = borrowRecords.findIndex(x => x.recordId == "PM03");
if (i != -1) borrowRecords.splice(i, 1);

console.log("=== SAU KHI XOA PM03 ===");
console.table(borrowRecords);