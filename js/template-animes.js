export default function printCart(object) {
    return `
        <div class="row">
            <div class="col">
                <div class="card mb-3 mt-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${object.image_url}" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${object.title}</h5>
                            <p class="card-text">${object.synopsis}</p>
                            <div class="row">
                                <div class="col">
                                    <p class="card-text"><strong>Score: </strong><small class="text-muted">${object.score}</small></p>
                                </div>
                                <p class="card-text"><strong>Episodes: </strong><small class="text-muted">${object.episodes}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}