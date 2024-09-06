const mens_kurta = require("./data/men/men_kurta.json");
const mens_kurta1 = require("./data/men/men_kurta1.json");
const mens_jeans = require("./data/men/men_jeans.json");
const mens_shirt = require("./data/men/men_shirt.json");
const mens_pants = require("./data/men/men_pants.json");

const womens_gouns = require("./data/women/gouns.json");
const womens_lenga_choli = require("./data/women/lenghaCholi.json");
const womens_lenga_choli1 = require("./data/women/lenghaCholi1.json");
const womens_lenga_choli2 = require("./data/women/lenghaCholi2.json");
const womens_mix_dress = require("./data/women/mixDress.json");
const womens_saree = require("./data/women/saree.json");
const womens_dress = require("./data/women/women_dress.json");
const womens_jeans = require("./data/women/women_jeans.json");
const womens_top = require("./data/women/women_top.json");

const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    _proxy: {
        proxy: {
            // Turn a path string such as `/user/:name` into a regular expression.
            // https://www.npmjs.com/package/path-to-regexp
            '/repos/(.*)': 'https://api.github.com/',
            '/:owner/:repo/raw/:ref/(.*)': 'http://127.0.0.1:2018',
            '/api/repos/(.*)': 'http://127.0.0.1:3721/'
        },
        // rewrite target's url path. Object-keys will be used as RegExp to match paths.
        // https://github.com/jaywcjlove/mocker-api/issues/62
        pathRewrite: {
            '^/api/repos/': '/repos/',
        },
        changeHost: true,
        // modify the http-proxy options
        httpProxy: {
            options: {
                ignorePath: true,
            },
            listeners: {
                proxyReq: function (proxyReq, req, res, options) {
                    console.log('proxyReq');
                },
            },
        },
    },
    // =====================
    // The default GET request.
    // https://github.com/jaywcjlove/mocker-api/pull/63
    'GET /api/mens/kurta':mens_kurta,
    'GET /api/mens/kurta/1':mens_kurta1,
    'GET /api/mens/jeans':mens_jeans,
    'GET /api/mens/shirt':mens_shirt,
    'GET /api/mens/pants':mens_pants,
    'GET /api/womens/gouns':womens_gouns,
    'GET /api/womens/lenga-choli':womens_lenga_choli,
    'GET /api/womens/lenga-choli/1':womens_lenga_choli1,
    'GET /api/womens/lenga-choli/2':womens_lenga_choli2,
    'GET /api/womens/mix_dress':womens_mix_dress,
    'GET /api/womens/saree':womens_saree,
    'GET /api/womens/dress':womens_dress,
    'GET /api/womens/jeans':womens_jeans,
    'GET /api/womens/top':womens_top,
    /*'/api/user': {
        id: 1,
        username: 'kenny',
        sex: 6
    },
    'GET /api/user': {
        id: 1,
        username: 'kenny',
        sex: 6
    },
    'GET /api/user/list': [
        {
            id: 1,
            username: 'kenny',
            sex: 6
        }, {
            id: 2,
            username: 'kenny',
            sex: 6
        }
    ],*/
    /*'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
        const { owner, repo, ref } = req.params;
        // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
        // owner => admin
        // repo => webpack-mock-api
        // ref => master
        // req.params[0] => add/ddd.md
        return res.json({
            id: 1,
            owner, repo, ref,
            path: req.params[0]
        });
    },
    'POST /api/login/account': (req, res) => {
        const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
            return res.json({
                status: 'ok',
                code: 0,
                token: "sdfsdfsdfdsf",
                data: {
                    id: 1,
                    username: 'kenny',
                    sex: 6
                }
            });
        } else {
            return res.status(403).json({
                status: 'error',
                code: 403
            });
        }
    },
    'DELETE /api/user/:id': (req, res) => {
        console.log('---->', req.body)
        console.log('---->', req.params.id)
        res.send({ status: 'ok', message: '' });
    }*/
}
module.exports = proxy;