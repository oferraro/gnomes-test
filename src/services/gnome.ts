
class GnomeService {

    getGnomes() {
        return fetch(`${window.location.href}data/data.json`)
            .then(res => res.json())
    }

}

const gnomeService = new GnomeService();
export default gnomeService;
