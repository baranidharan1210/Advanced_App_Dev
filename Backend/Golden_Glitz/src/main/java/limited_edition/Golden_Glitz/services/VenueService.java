package limited_edition.Golden_Glitz.Services;

import limited_edition.Golden_Glitz.Models.Venue;

import java.util.List;

public interface VenueService {
    List<Venue> getAllVenues();
    Venue getVenueById(Long id);
    Venue createVenue(Venue venue);
    Venue updateVenue(Long id, Venue venue);

    Venue updateVenueAvailability(Venue venue);

    void deleteVenue(Long id);
}