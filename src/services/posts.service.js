import {axiosService} from "./axios.service";
import {links} from "../constans/links";
import {usersService} from "./users.service";

export const postsService = {
    getAll: () => axiosService.get(links.posts),
    getPostsById: (id) => axiosService.get(`${links.users}/${id}${links.posts}`)
}