// https://hub.docker.com/v2/search/repositories/?query=nginx
// https://www.arthurkoziel.com/dockerhub-registry-api/
// https://stackoverflow.com/questions/31251356/how-to-get-a-list-of-images-on-docker-registry-v2
// https://www.baeldung.com/ops/docker-registry-api-list-images-tags

import { get } from "./request"

export const findImages = (imageName:string) => {
  return get(`search/repositories/?query=${imageName}`)
}