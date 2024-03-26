package limited_edition.Golden_Glitz.Services;

import limited_edition.Golden_Glitz.DTO.Request.BookingRequest;
import limited_edition.Golden_Glitz.Models.Bookings;

import java.util.List;

public interface BookingService {

    List<Bookings> getAllBookings();

    Bookings postBooking(BookingRequest bookingRequest);

    Bookings updateBookings(Long booking_id, BookingRequest bookingRequest);


}
