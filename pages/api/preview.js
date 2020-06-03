import {PrismicClient} from '../../lib/api'

const linkResolver = (doc) =>{
    if (doc.type === 'post') return `/posts/${doc.uid}`
    return `/${doc.uid}`
}

export default async (req, res) => {
    const ref = req.query.token

    const url = await PrismicClient.previewSession(ref, linkResolver, '/')
    if(!url) return res.status(401).json({message: "Invalid token"})

    res.setPreviewData({
        ref,
    })
    res.write(
        `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
        <script>window.location.href = '${url}'</script>
        </head>`
      )
    
      res.end()
}

