# diagonal workshop

# Testing local api - 

# Expose api on any port to invoke. To test local we must installed docker on local machine.
1. sam local start-api -p 3001

# Testing api with curl
2. curl -X POST -H "Content-Type: application/json" \
    -d '{ "scrapeUrl": "https://aws.amazon.com/faqs/?fbclid=IwAR3wpHOnFAshCjKqLfLFtBHlKI5o1QQH-6H6yWqeLl2tBm96a0V_eXIv8gg" }' \
    http://127.0.0.1:3001/getData

# Sample Response -
3.{
    "twitterCard": "summary",
    "twitterTitle": "AWS | FAQs",
    "twitterSite": "@awscloud",
    "ogTitle": "AWS | FAQs",
    "ogType": "company",
    "ogUrl": "https://aws.amazon.com/faqs/",
    "ogSiteName": "Amazon Web Services, Inc.",
    "ogImage": {
        "url": "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
        "width": null,
        "height": null,
        "type": "png"
    },
    "twitterImage": {
        "url": "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_179x109.png",
        "width": null,
        "height": null,
        "alt": null
    },
    "ogLocale": "en-US",
    "charset": "utf8",
    "requestUrl": "https://aws.amazon.com/faqs/?fbclid=IwAR3wpHOnFAshCjKqLfLFtBHlKI5o1QQH-6H6yWqeLl2tBm96a0V_eXIv8gg",
    "success": true
}