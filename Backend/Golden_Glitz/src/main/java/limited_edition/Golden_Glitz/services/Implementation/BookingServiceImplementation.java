package limited_edition.Golden_Glitz.Services.Implementation;

import limited_edition.Golden_Glitz.DTO.Request.BookingRequest;
import limited_edition.Golden_Glitz.Models.Bookings;
import limited_edition.Golden_Glitz.Models.Events;
import limited_edition.Golden_Glitz.Models.User;
import limited_edition.Golden_Glitz.Models.Venue;
import limited_edition.Golden_Glitz.Repository.BookingRepository;
import limited_edition.Golden_Glitz.Repository.EventRepository;
import limited_edition.Golden_Glitz.Repository.UserRepository;
import limited_edition.Golden_Glitz.Repository.VenueRepository;
import limited_edition.Golden_Glitz.Services.BookingService;
import limited_edition.Golden_Glitz.Services.VenueService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImplementation implements BookingService {

    private final BookingRepository bookingRepository;

    private final UserRepository userRepository;

    private final EventRepository eventRepository;

    private final VenueRepository venueRepository;

    private final VenueService venueService;

    @Override
    public List<Bookings> getAllBookings() {

        return bookingRepository.findAll();
    }

    @Override
    public Bookings postBooking(BookingRequest bookingRequest) {

        User user = userRepository.findById(bookingRequest.getUser_id()).orElseThrow();

        Events event = eventRepository.findByCategory(bookingRequest.getCategory());

        Venue venue = venueRepository.findById(bookingRequest.getVenue_id()).orElseThrow();

        Bookings result = Bookings
                .builder()
                .date(new Date())
                .head_count(bookingRequest.getHead_count())
                .subscription(bookingRequest.getSubscription())
                .status(bookingRequest.getStatus())
                .cost(bookingRequest.getCost())
                .user(user)
                .event(event)
                .venue(venue)
                .build();

        bookingRepository.save(result);

        return result;
    }

    @Override
    public Bookings updateBookings(Long booking_id, BookingRequest bookingRequest) {

        User user = userRepository.findById(bookingRequest.getUser_id()).orElseThrow();

        Events event = eventRepository.findByCategory(bookingRequest.getCategory());


        Venue venue = venueRepository.findById(bookingRequest.getVenue_id()).orElseThrow();

        Venue updatedVenue = venueService.updateVenueAvailability(venue);

        Bookings updatedBooking = bookingRepository.findById(booking_id).orElseThrow();

        updatedBooking.setCost(bookingRequest.getCost());
        updatedBooking.setStatus(bookingRequest.getStatus());
        updatedBooking.setHead_count(bookingRequest.getHead_count());
        updatedBooking.setSubscription(bookingRequest.getSubscription());
        updatedBooking.setEvent(event);
        updatedBooking.setVenue(updatedVenue);
        updatedBooking.setUser(user);

        return bookingRepository.save(updatedBooking);
    }


}
