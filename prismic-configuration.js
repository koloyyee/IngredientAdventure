import Prismic from 'prismic-javascript'
require("dotenv").config();

const REPO= process.env.PRISMIC_REPOSITORY_NAME
const PRISMIC_ACCESS_TOKEN = process.env.PRISMIC_API_TOKEN

export const apiEndpoint = `https://${REPO}.cdn.prismic.io/api/v2`
export const accessToken = PRISMIC_ACCESS_TOKEN

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}