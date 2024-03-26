package limited_edition.Golden_Glitz.Services.Implementation;

import limited_edition.Golden_Glitz.Models.Events;
import limited_edition.Golden_Glitz.Repository.EventRepository;
import limited_edition.Golden_Glitz.Services.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class EventServiceImplementation implements EventService {

    private final EventRepository eventsRepository;

    @Override
    public List<Events> getAllEvents() {
        return eventsRepository.findAll();
    }

    @Override
    public Events getEventById(Long id) {
        Optional<Events> eventOptional = eventsRepository.findById(id);
        return eventOptional.orElse(null);
    }

    @Override
    public Events createEvent(Events event) {
        return eventsRepository.save(event);
    }

    @Override
    public Events updateEvent(Long id, Events event) {
        if (eventsRepository.existsById(id)) {
            event.setId(id);
            return eventsRepository.save(event);
        }
        return null;
    }

    @Override
    public void deleteEvent(Long id) {
        eventsRepository.deleteById(id);
    }
}