 import { Token } from "@/api";

 export async function authFetch(url, params) {
    const tokenCtrl = new Token();
    const token =  tokenCtrl.getToken();
 }