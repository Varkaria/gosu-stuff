const osuapiurl = 'https://osu.ppy.sh/p/api' // Current osu! API url
const osuavatarurl = 'https://a.ppy.sh' // Current osu! Avatar url

// 💘 This function will getting about user infomation from username or userid in bancho server
async function GetUserInfomation(user, apikey) {
    const response = await fetch(osuapiurl + `/api/get_user?u=${user}&k=${apikey}}`)
    const data = await response.json().data
    return data[0] // Selecting in first data in array
}

// 👔 This function will getting about user profile from username or userid in bancho server
/* Warning : Not Recommended to use GetUserInfomation and GetUserAvatar in the same time
I recommend to make a varible of GetUserInfomation is better 😇  */
async function GetUserAvatar(user, apikey) {
    const userdata = await GetUserInfomation(user, apikey)
    return `${osuavatarurl}/${userdata.userid}`
}

// 📜 This function will getting about user best scores from username or userid in bancho server
async function GetUserBest(user, apikey) {
    const response = await fetch(osuapiurl + `/api/get_user_best?u=${user}&k=${apikey}}`)
    const data = await response.json().data
    return data // Selecting in first data in array
}

// 📜 This function will getting about user recent scores from username or userid in bancho server
async function GetUserRecent(user, apikey) {
    const response = await fetch(osuapiurl + `/api/get_user_recent?u=${user}&k=${apikey}}`)
    const data = await response.json().data
    return data // Selecting in first data in array
}