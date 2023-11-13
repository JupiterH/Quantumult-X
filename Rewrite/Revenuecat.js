# ScriptName        RevenueCat多合一脚本[墨鱼版]
# Author            @ddgksf2013
# UpdateTime        2023-11-13
# ScriptURL         https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]
hostname=api.revenuecat.com
