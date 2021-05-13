const ogs = require('open-graph-scraper');

const scrapeData = async (url) => {
    const options = { url, };
    return await ogs(options).then(data => {
        const { result } = data;
        return {
            'statusCode': 200,
            'body': JSON.stringify(result)
        }
    });
}

exports.handler = async (event, context) => {
    try {
        const eventPayload = JSON.parse(event.body);
        const { scrapeUrl } = eventPayload;

        if (!scrapeUrl) {
            return {
                'statusCode': 400,
                'body': JSON.stringify({
                    'message': 'Please provide scrape url'
                })
            }
        }

        return await scrapeData(scrapeUrl);
    } catch (err) {
        console.log(err);
        return err;
    }
};
