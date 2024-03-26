package limited_edition.Golden_Glitz.Services.Implementation;

import limited_edition.Golden_Glitz.Repository.VenueRepository;
import limited_edition.Golden_Glitz.Services.VenueService;
import lombok.RequiredArgsConstructor;
import limited_edition.Golden_Glitz.Models.Venue;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class VenueServiceImplementation implements VenueService {

    private final VenueRepository venueRepository;

    @Override
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    @Override
    public Venue getVenueById(Long id) {
        Optional<Venue> venueOptional = venueRepository.findById(id);
        return venueOptional.orElse(null);
    }

    @Override
    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    @Override
    public Venue updateVenue(Long id, Venue venue) {
        if (venueRepository.existsById(id)) {
            venue.setId(id);
            return venueRepository.save(venue);
        }
        return null;
    }

    @Override
    public Venue updateVenueAvailability(Venue venue) {

        Venue updatedVenue = venueRepository.findById(venue.getId()).orElseThrow();

        updatedVenue.setCapacity(venue.getCapacity());
        updatedVenue.setLocation(venue.getLocation());
        updatedVenue.setAvailable(!venue.isAvailable());

        return venueRepository.save(updatedVenue);
    }

    @Override
    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
}
