const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3020f0070dmsh6bee52132e02a9bp1485cfjsn697763fdaaed',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
    return data
}

(async () => {
    try {
        const videos = await fetchData(API)
        let view = `
            ${videos.items.map( video => (`
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank"">
                    <div class="group relative">
                        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                            <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                            </h3>
                        </div>
                    </div>      
                </a>     
            `))}
        `
        content.innerHTML = view
        // console.log(videos.items)
    } catch (error) {
        // content.innerHTML = `<h1>ERROR</h1>`
        console.error(error)
    }
})();
