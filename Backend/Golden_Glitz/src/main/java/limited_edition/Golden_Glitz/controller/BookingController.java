package limited_edition.Golden_Glitz.Controller;

import limited_edition.Golden_Glitz.DTO.Request.BookingRequest;
import limited_edition.Golden_Glitz.Models.Bookings;
import limited_edition.Golden_Glitz.Services.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    @GetMapping
    public ResponseEntity<List<Bookings>> getAllBookings() {

        List<Bookings> bookings = bookingService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Bookings> postBookings(@RequestBody BookingRequest bookingRequest) {

        Bookings bookings = bookingService.postBooking(bookingRequest);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
