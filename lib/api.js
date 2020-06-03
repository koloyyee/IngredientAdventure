import Prismic from "prismic-javascript";
require("dotenv").config();

const REPO = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPO}.cdn.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPO}.prismic.io/graphql`;

export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

const fetchAPI = async (query, { previewData, variables } = {}) => {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.error(res.status);
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch");
  }
  return json.data;
};

export const getAllPostsWithSlug = async () => {
  const data = await fetchAPI(`
        {
            allPosts {
                edges {
                    node {
                        _meta {
                            uid
                        }
                    }
                }
            }
        }
    `);
  return data?.allPosts?.edges;
};

export const getAllPostsForHome = async (previewData) => {
  const data = await fetchAPI(
    `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            coverimage
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )
  return data.allPosts.edges
};

export const getPostAndMore = async (slug, previewData) => {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      coverimage
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          coverimage
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  );

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2);

  return data;
};


export const getAbout = async () => {
  const data = await fetchAPI(
    `
    query {
      allAbouts {
        edges {
          node {
            about
            introduction
            techstack
            avatar
            contacts
          }
        }
      }
    }
    `
  )
  return data?.allAbouts?.edges;

}

export const getAllProjects = async () => {

  const projects = await fetchAPI(

    `
    query {
      allProjectss {
        edges {
          node {
            title
            demo
            github
          	livedemo {
          	  _linkType
          	}
            repo {
              _linkType
            }
            image
            description
            _linkType
          }
        }
      } 
  
    }
    `
  )
  return projects?.allProjectss?.edges
}