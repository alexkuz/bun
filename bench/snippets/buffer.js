// import { Buffer } from "buffer";
var buf = new Buffer(1024);
var view = new DataView(buf.buffer);
var INTERVAL = 9999999;
var time = (name, fn) => {
  for (let i = 0; i < INTERVAL; i++) fn();

  console.time(name.padEnd("DataView.readBigUInt64 (LE)".length));
  for (let i = 0; i < INTERVAL; i++) fn();
  console.timeEnd(name.padEnd("DataView.readBigUInt64 (LE)".length));
};

console.log(
  `Run ${new Intl.NumberFormat().format(INTERVAL)} times with a warmup:`,
  "\n"
);

time("Buffer.readBigInt64BE     ", () => buf.readBigInt64BE(0));
// time("DataView.getBigInt64 (BE)", () => view.getBigInt64(0, false));
// console.log("");
time("Buffer.readBigInt64LE     ", () => buf.readBigInt64LE(0));
// time("DataView.readBigInt64 (LE)", () => view.getBigInt64(0, true));
// console.log("");
time("Buffer.readBigUInt64BE     ", () => buf.readBigUInt64BE(0));
// time("DataView.getBigUInt64 (BE)", () => view.getBigUint64(0, false));
// console.log("");
time("Buffer.readBigUInt64LE     ", () => buf.readBigUInt64LE(0));
// time("DataView.readBigUInt64 (LE)", () => view.getBigUint64(0, true));
// console.log("");
time("Buffer.readDoubleBE     ", () => buf.readDoubleBE(0));
// time("DataView.getDouble (BE)", () => view.getFloat64(0, false));
// console.log("");
time("Buffer.readDoubleLE     ", () => buf.readDoubleLE(0));
// time("DataView.readDouble (LE)", () => view.getFloat64(0, true));
// console.log("");
time("Buffer.readFloatBE     ", () => buf.readFloatBE(0));
// time("DataView.getFloat (BE)", () => view.getFloat32(0, false));
// console.log("");
time("Buffer.readFloatLE     ", () => buf.readFloatLE(0));
// time("DataView.readFloat (LE)", () => view.getFloat32(0, true));
// console.log("");
time("Buffer.readInt16BE     ", () => buf.readInt16BE(0));
// time("DataView.getInt16 (BE)", () => view.getInt16(0, false));
// console.log("");
time("Buffer.readInt16LE     ", () => buf.readInt16LE(0));
// time("DataView.readInt16 (LE)", () => view.getInt16(0, true));
// console.log("");
time("Buffer.readInt32BE     ", () => buf.readInt32BE(0));
// time("DataView.getInt32 (BE)", () => view.getInt32(0, false));
// console.log("");
time("Buffer.readInt32LE     ", () => buf.readInt32LE(0));
// time("DataView.readInt32 (LE)", () => view.getInt32(0, true));
// console.log("");
time("Buffer.readInt8     ", () => buf.readInt8(0));
// time("DataView.readInt (t8)", () => view.getInt8(0));
// console.log("");
time("Buffer.readUInt16BE     ", () => buf.readUInt16BE(0));
// time("DataView.getUInt16 (BE)", () => view.getUint16(0, false));
// console.log("");
time("Buffer.readUInt16LE     ", () => buf.readUInt16LE(0));
// time("DataView.readUInt16 (LE)", () => view.getUint16(0, true));
// console.log("");
time("Buffer.readUInt32BE     ", () => buf.readUInt32BE(0));
// time("DataView.getUInt32 (BE)", () => view.getUint32(0, false));
// console.log("");
time("Buffer.readUInt32LE     ", () => buf.readUInt32LE(0));
// time("DataView.getUInt32 (LE)", () => view.getUint32(0, true));
// console.log("");
time("Buffer.readUInt8     ", () => buf.readUInt8(0));
// time("DataView.getUInt (t8)", () => view.getUint8(0));
// console.log("");

time("Buffer.writeBigInt64BE", () => buf.writeBigInt64BE(BigInt(0), 0));
// time("DataView.getBigInt64 (BE)", () => view.getBigInt64(0, false));
// console.log("");
time("Buffer.writeBigInt64LE", () => buf.writeBigInt64LE(BigInt(0), 0));
// time("DataView.readBigInt64 (LE)", () => view.getBigInt64(0, true));
// console.log("");
time("Buffer.writeBigUInt64BE", () => buf.writeBigUInt64BE(BigInt(0), 0));
// time("DataView.getBigUInt64 (BE)", () => view.getBigUint64(0, false));
// console.log("");
time("Buffer.writeBigUInt64LE", () => buf.writeBigUInt64LE(BigInt(0), 0));
// time("DataView.readBigUInt64 (LE)", () => view.getBigUint64(0, true));
// console.log("");
time("Buffer.writeDoubleBE     ", () => buf.writeDoubleBE(0, 0));
// time("DataView.getDouble (BE)", () => view.getFloat64(0, false));
// console.log("");
time("Buffer.writeDoubleLE     ", () => buf.writeDoubleLE(0, 0));
// time("DataView.readDouble (LE)", () => view.getFloat64(0, true));
// console.log("");
time("Buffer.writeFloatBE     ", () => buf.writeFloatBE(0, 0));
// time("DataView.getFloat (BE)", () => view.getFloat32(0, false));
// console.log("");
time("Buffer.writeFloatLE     ", () => buf.writeFloatLE(0, 0));
// time("DataView.readFloat (LE)", () => view.getFloat32(0, true));
// console.log("");
time("Buffer.writeInt16BE     ", () => buf.writeInt16BE(0, 0));
// time("DataView.getInt16 (BE)", () => view.getInt16(0, false));
// console.log("");
time("Buffer.writeInt16LE     ", () => buf.writeInt16LE(0, 0));
// time("DataView.readInt16 (LE)", () => view.getInt16(0, true));
// console.log("");
time("Buffer.writeInt32BE     ", () => buf.writeInt32BE(0, 0));
// time("DataView.getInt32 (BE)", () => view.getInt32(0, false));
// console.log("");
time("Buffer.writeInt32LE     ", () => buf.writeInt32LE(0, 0));
// time("DataView.readInt32 (LE)", () => view.getInt32(0, true));
// console.log("");
time("Buffer.writeInt8     ", () => buf.writeInt8(0, 0));
// time("DataView.readInt (t8)", () => view.getInt8(0));
// console.log("");
time("Buffer.writeUInt16BE     ", () => buf.writeUInt16BE(0, 0));
// time("DataView.getUInt16 (BE)", () => view.getUint16(0, false));
// console.log("");
time("Buffer.writeUInt16LE     ", () => buf.writeUInt16LE(0, 0));
// time("DataView.readUInt16 (LE)", () => view.getUint16(0, true));
// console.log("");
time("Buffer.writeUInt32BE     ", () => buf.writeUInt32BE(0, 0));
// time("DataView.getUInt32 (BE)", () => view.getUint32(0, false));
// console.log("");
time("Buffer.writeUInt32LE     ", () => buf.writeUInt32LE(0, 0));
// time("DataView.getUInt32 (LE)", () => view.getUint32(0, true));
// console.log("");
time("Buffer.writeUInt8     ", () => buf.writeUInt8(0, 0));
// time("DataView.getUInt (t8)", () => view.getUint8(0));
// console.log("");

buf.writeUInt8(10, 10);
console.assert(buf.readUInt8(10, 10) === 10);