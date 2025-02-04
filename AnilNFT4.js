"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var lucid_cardano_1 = require("lucid-cardano");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        // Function to mint an NFT
        function mintNFT(name) {
            return __awaiter(this, void 0, void 0, function () {
                var unit, tx, signedTx, txHash, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            unit = policyId + (0, lucid_cardano_1.fromText)(name);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, lucid
                                    .newTx()
                                    .mintAssets((_a = {}, _a[unit] = 1n, _a)) // Mint 1 unit of the NFT
                                    .attachMetadata(222, metadata[222]) // Attach metadata
                                    .validTo(Date.now() + 100000) // Add validity
                                    .attachMintingPolicy(mintingPolicy)
                                    .complete()];
                        case 2:
                            tx = _b.sent();
                            return [4 /*yield*/, tx.sign().complete()];
                        case 3:
                            signedTx = _b.sent();
                            return [4 /*yield*/, signedTx.submit()];
                        case 4:
                            txHash = _b.sent();
                            return [2 /*return*/, txHash];
                        case 5:
                            error_2 = _b.sent();
                            console.error("Error minting NFT:", error_2);
                            throw error_2;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        }
        // Function to burn an NFT
        function burnNFT(name) {
            return __awaiter(this, void 0, void 0, function () {
                var unit, tx, signedTx, txHash, error_3;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            unit = policyId + (0, lucid_cardano_1.fromText)(name);
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, lucid
                                    .newTx()
                                    .mintAssets((_a = {}, _a[unit] = -1n, _a)) // Burn 1 unit of the NFT
                                    .validTo(Date.now() + 100000)
                                    .attachMintingPolicy(mintingPolicy)
                                    .complete()];
                        case 2:
                            tx = _b.sent();
                            return [4 /*yield*/, tx.sign().complete()];
                        case 3:
                            signedTx = _b.sent();
                            return [4 /*yield*/, signedTx.submit()];
                        case 4:
                            txHash = _b.sent();
                            return [2 /*return*/, txHash];
                        case 5:
                            error_3 = _b.sent();
                            console.error("Error burning NFT:", error_3);
                            throw error_3;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        }
        var metadata, lucid, addr, paymentCredential, mintingPolicy, policyId, txHash, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    metadata = {
                        222: {
                            name: "NFT",
                            description: "This is my NFT",
                            image: "ipfs://QmRzicpReutwCkM6aotuKjErFCUD213DpwPq6ByuzMJaua",
                        },
                        333: {
                            name: "",
                            description: "",
                            ticker: undefined,
                            url: undefined,
                            logo: undefined,
                            decimals: undefined
                        },
                        444: undefined
                    };
                    return [4 /*yield*/, lucid_cardano_1.Lucid.new(new lucid_cardano_1.Blockfrost("https://cardano-preprod.blockfrost.io/api/v0", "preprodUFORB61aetgYVPS7c1qGhven5shd9cjE"), "Preprod")];
                case 1:
                    lucid = _a.sent();
                    // Select the wallet from seed phrase
                    lucid.selectWalletFromSeed("material chat insane area spatial when can clutch badge notable sing napkin goddess double check mandate thought bicycle spatial notable vendor judge donor liar");
                    return [4 /*yield*/, lucid.wallet.address()];
                case 2:
                    addr = _a.sent();
                    console.log(addr, "this is address");
                    paymentCredential = lucid.utils.getAddressDetails(addr).paymentCredential;
                    mintingPolicy = lucid.utils.nativeScriptFromJson({
                        type: "all",
                        scripts: [
                            { type: "sig", keyHash: paymentCredential === null || paymentCredential === void 0 ? void 0 : paymentCredential.hash },
                            {
                                type: "before",
                                slot: lucid.utils.unixTimeToSlot(Date.now() + 1000000),
                            },
                        ],
                    });
                    policyId = lucid.utils.mintingPolicyToId(mintingPolicy);
                    console.log(policyId, "my policy id");
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, mintNFT("MY_nft")];
                case 4:
                    txHash = _a.sent();
                    console.log("NFT minted with TxHash:", txHash);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Error in minting:", error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Run the main function
main().catch(function (error) { return console.error("Error in main function:", error); });
