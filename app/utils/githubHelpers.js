// app/utils/githubHelpers.js
import axios from 'axios'   // var axios = require('axios');

const id = "af38f81e1a9695d83e88";
const sec = "72ac92ecc5cc04a021b92f0a1e1da807aee5aeb4";
const param = `?client_id=${id}&client_secret=${sec}`;  // const param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username = 'nineoomsin') {
    // return axios.get('https://api.github.com/users/' + username + param);
    return axios.get(`https:api.github.com/users/${username + param}`);
}

function getRepos(username = 'nineoomsin') {
    // return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
    return axios.get(`https:api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
    return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0)
}

async function getPlayersData(player) {
    try {
        const repos = await getRepos(player.login)
        const totalStars = await getTotalStars(repos)
        return {
            followers: player.followers,
            totalStars
        }
    } catch (error) {
        console.warn('Error in getPlayersData', error)
    }
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
}

export async function getPlayersInfo(players) {
    try {
        const info = await Promise.all(players.map((username) => getUserInfo(username)))
        return info.map((user) => user.data)
    } catch (error) {
        console.warn('Error in getPlayersInfo: ', error)
    }
}

export async function battle(players) {
    try {
        const playerOneData = getPlayersData(players[0])
        const playerTwoData = getPlayersData(players[1])
        const data = await Promise.all([playerOneData, playerTwoData])
        return calculateScores(data)
    } catch (error) {
        console.warn('Error in getPlayersInfo: ', error)
    }
}

// module.exports = helpers;
// export default helpers