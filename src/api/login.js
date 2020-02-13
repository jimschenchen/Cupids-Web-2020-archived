import service from "@/utils/request"

/**
 * Login
 */
export function Login() {
    service.request({
        method: 'post',
        url: '/login.php',
        data: {}
    }).then(res => {
        console.log(res)
    })
}