"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                console.log(\"Sign in request received by next auth\");\n                const res = await fetch(\"http://localhost:3000/api/auth/login\", {\n                    method: 'POST',\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const userData = await res.json();\n                console.log(\"User data from login API\", userData.user);\n                if (res.ok && userData) {\n                    const user = {\n                        userId: userData.user._id,\n                        firstName: userData.user.firstName,\n                        lastName: userData.user.lastName,\n                        email: userData.user.email,\n                        role: userData.user.role\n                    };\n                    const access_token = process.env.ACCESS_TOKEN;\n                    const account = {\n                        access_token,\n                        user\n                    };\n                    console.log(\"Credentials authorization complete\", account);\n                    return account;\n                }\n                return null;\n            }\n        })\n    ],\n    jwt: {\n        encryption: true,\n        secret: process.env.JWT_SECRET\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                console.log(\"JWT account\", user);\n                token.access_token = user.access_token;\n                token.user = user.user;\n            }\n            console.log(\"JWT token created\", token);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            session.access_token = token.access_token;\n            console.log(\"Session created\", session);\n            return session;\n        }\n    },\n    pages: {\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ2lDO0FBRWpFLGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDckJFLFNBQVMsRUFBRSxDQUFDO1FBQ1JELHNFQUFtQixDQUFDLENBQUM7WUFDakJFLElBQUksRUFBRSxDQUFhO1lBQ25CQyxXQUFXLEVBQUUsQ0FBQztnQkFDZEMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFPO29CQUFFQyxJQUFJLEVBQUUsQ0FBTztnQkFBQyxDQUFDO2dCQUN4Q0MsUUFBUSxFQUFFLENBQUM7b0JBQUVGLEtBQUssRUFBRSxDQUFVO29CQUFFQyxJQUFJLEVBQUUsQ0FBVTtnQkFBQyxDQUFDO1lBQ2xELENBQUM7a0JBQ0tFLFNBQVMsRUFBQ0wsV0FBVyxFQUFFTSxHQUFHLEVBQUUsQ0FBQztnQkFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQXVDO2dCQUVuRCxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFzQyx1Q0FBRSxDQUFDO29CQUM3REMsTUFBTSxFQUFFLENBQU07b0JBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLFdBQVc7b0JBQ2hDZSxPQUFPLEVBQUUsQ0FBQzt3QkFBQyxDQUFjLGVBQUUsQ0FBa0I7b0JBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFDRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNQLEdBQUcsQ0FBQ1EsSUFBSTtnQkFFL0JWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQTBCLDJCQUFFUSxRQUFRLENBQUNFLElBQUk7Z0JBRXJELEVBQUUsRUFBRVQsR0FBRyxDQUFDVSxFQUFFLElBQUlILFFBQVEsRUFBRSxDQUFDO29CQUNyQixLQUFLLENBQUNFLElBQUksR0FBRyxDQUFDO3dCQUNWRSxNQUFNLEVBQUVKLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDRyxHQUFHO3dCQUN6QkMsU0FBUyxFQUFFTixRQUFRLENBQUNFLElBQUksQ0FBQ0ksU0FBUzt3QkFDbENDLFFBQVEsRUFBRVAsUUFBUSxDQUFDRSxJQUFJLENBQUNLLFFBQVE7d0JBQ2hDdEIsS0FBSyxFQUFFZSxRQUFRLENBQUNFLElBQUksQ0FBQ2pCLEtBQUs7d0JBQzFCdUIsSUFBSSxFQUFFUixRQUFRLENBQUNFLElBQUksQ0FBQ00sSUFBSTtvQkFDNUIsQ0FBQztvQkFFRCxLQUFLLENBQUNDLFlBQVksR0FBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVk7b0JBRTVDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7d0JBQUNKLFlBQVk7d0JBQUVQLElBQUk7b0JBQUMsQ0FBQztvQkFFdENYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9DLHFDQUFFcUIsT0FBTztvQkFDekQsTUFBTSxDQUFDQSxPQUFPO2dCQUNsQixDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJO1lBQ2YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0RDLEdBQUcsRUFBRSxDQUFDO1FBQ0ZDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxNQUFNLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxVQUFVO0lBQ2xDLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7Y0FDRkosR0FBRyxFQUFDLENBQUMsQ0FBQ0ssS0FBSyxHQUFFakIsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hCLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBRVBYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWEsY0FBRVUsSUFBSTtnQkFFL0JpQixLQUFLLENBQUNWLFlBQVksR0FBR1AsSUFBSSxDQUFDTyxZQUFZO2dCQUN0Q1UsS0FBSyxDQUFDakIsSUFBSSxHQUFHQSxJQUFJLENBQUNBLElBQUk7WUFDMUIsQ0FBQztZQUVEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFtQixvQkFBRTJCLEtBQUs7WUFFdEMsTUFBTSxDQUFDQSxLQUFLO1FBQ2hCLENBQUM7Y0FDS0MsT0FBTyxFQUFDLENBQUNBLENBQUFBLE9BQU8sR0FBRUQsS0FBSyxHQUFDLEVBQUUsQ0FBQztZQUM3QkMsT0FBTyxDQUFDbEIsSUFBSSxHQUFHaUIsS0FBSyxDQUFDakIsSUFBSSxDQUFDO1lBQzFCa0IsT0FBTyxDQUFDWCxZQUFZLEdBQUdVLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1lBRTFDbEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBaUIsa0JBQUU0QixPQUFPO1lBQ3RDLE1BQU0sQ0FBQ0EsT0FBTztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBQztJQU1SLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxyXG4gICAgICAgICAgICBwYXNzd29yZDogeyAgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2lnbiBpbiByZXF1ZXN0IHJlY2VpdmVkIGJ5IG5leHQgYXV0aFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hdXRoL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGRhdGEgZnJvbSBsb2dpbiBBUElcIiwgdXNlckRhdGEudXNlcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rICYmIHVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyRGF0YS51c2VyLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyRGF0YS51c2VyLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHVzZXJEYXRhLnVzZXIubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiB1c2VyRGF0YS51c2VyLnJvbGVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2Nlc3NfdG9rZW49IHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50ID0geyBhY2Nlc3NfdG9rZW4sIHVzZXIgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWRlbnRpYWxzIGF1dGhvcml6YXRpb24gY29tcGxldGVcIiwgYWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBqd3Q6IHtcclxuICAgICAgICBlbmNyeXB0aW9uOiB0cnVlLFxyXG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKV1QgYWNjb3VudFwiLCB1c2VyKVxyXG5cclxuICAgICAgICAgICAgICAgIHRva2VuLmFjY2Vzc190b2tlbiA9IHVzZXIuYWNjZXNzX3Rva2VuXHJcbiAgICAgICAgICAgICAgICB0b2tlbi51c2VyID0gdXNlci51c2VyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSldUIHRva2VuIGNyZWF0ZWRcIiwgdG9rZW4pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VufSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xyXG4gICAgICAgICAgICBzZXNzaW9uLmFjY2Vzc190b2tlbiA9IHRva2VuLmFjY2Vzc190b2tlbjtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Vzc2lvbiBjcmVhdGVkXCIsIHNlc3Npb24pXHJcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICAvLyBzaWduSW46ICxcclxuICAgICAgICAvLyBzaWduT3V0OiAsXHJcbiAgICAgICAgLy8gZXJyb3I6ICwgLy8gRXJyb3IgY29kZSBwYXNzZWQgaW4gcXVlcnkgc3RyaW5nIGFzID9lcnJvcj1cclxuICAgICAgICAvLyB2ZXJpZnlSZXF1ZXN0OiAsIC8vICh1c2VkIGZvciBjaGVjayBlbWFpbCBtZXNzYWdlKVxyXG4gICAgICAgIC8vIG5ld1VzZXI6IC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXHJcbiAgICB9XHJcbn0pIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ1c2VyRGF0YSIsImpzb24iLCJ1c2VyIiwib2siLCJ1c2VySWQiLCJfaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJvbGUiLCJhY2Nlc3NfdG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiQUNDRVNTX1RPS0VOIiwiYWNjb3VudCIsImp3dCIsImVuY3J5cHRpb24iLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwiY2FsbGJhY2tzIiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();