package limited_edition.Golden_Glitz.Services;


import limited_edition.Golden_Glitz.Models.Events;

import java.util.List;

public interface EventService {
    List<Events> getAllEvents();
    Events getEventById(Long id);
    Events createEvent(Events event);
    Events updateEvent(Long id, Events event);
    void deleteEvent(Long id);
}