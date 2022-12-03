
export async function apiGetData() {
    try {
        const response = await fetch(`https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet`)
        const results = await response.json();
        if (results.tweets.length > 1) {
            return {
                success: true,
                results: results.tweets
            };
        } else {
            // alert('No results found')
            return { success: false, message: "Message 1"+results }
        }
    } catch (e) {
        // alert('You request had an error')
        // console.log('Error sending request ', e)
        return { success: false, message: "Message 2" }
    }
}