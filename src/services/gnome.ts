
class GnomeService {
    dataUrl = `${window.location.href}data/data.json`; // TODO: for production, change this for the real URL

    getGnomes() {
        return fetch(this.dataUrl)
            .then(res => res.json())
    }

}

const gnomeService = new GnomeService();
export default gnomeService;
