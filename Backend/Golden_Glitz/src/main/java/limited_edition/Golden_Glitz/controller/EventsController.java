package limited_edition.Golden_Glitz.Controller;

import limited_edition.Golden_Glitz.Models.Events;
import limited_edition.Golden_Glitz.Services.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/events")
public class EventsController {

    private final EventService eventsService;

    @GetMapping
    public ResponseEntity<List<Events>> getAllEvents() {
        List<Events> events = eventsService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Events> getEventById(@PathVariable("id") Long id) {
        Events event = eventsService.getEventById(id);
        if (event != null) {
            return new ResponseEntity<>(event, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Events> createEvent(@RequestBody Events event) {
        Events createdEvent = eventsService.createEvent(event);
        return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Events> updateEvent(@PathVariable("id") Long id, @RequestBody Events event) {
        Events updatedEvent = eventsService.updateEvent(id, event);
        if (updatedEvent != null) {
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable("id") Long id) {
        eventsService.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
