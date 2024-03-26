package limited_edition.Golden_Glitz.Controller;


import limited_edition.Golden_Glitz.Models.Venue;
import limited_edition.Golden_Glitz.Services.VenueService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/venues")
public class VenueController {

    private final VenueService venueService;

    @GetMapping
    public ResponseEntity<List<Venue>> getAllVenues() {
        List<Venue> venues = venueService.getAllVenues();
        return new ResponseEntity<>(venues, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venue> getVenueById(@PathVariable("id") Long id) {
        Venue venue = venueService.getVenueById(id);
        if (venue != null) {
            return new ResponseEntity<>(venue, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Venue> createVenue(@RequestBody Venue venue) {
        Venue createdVenue = venueService.createVenue(venue);
        return new ResponseEntity<>(createdVenue, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venue> updateVenue(@PathVariable("id") Long id, @RequestBody Venue venue) {
        Venue updatedVenue = venueService.updateVenue(id, venue);
        if (updatedVenue != null) {
            return new ResponseEntity<>(updatedVenue, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVenue(@PathVariable("id") Long id) {
        venueService.deleteVenue(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}